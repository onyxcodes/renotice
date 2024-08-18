import {
  createListenerMiddleware,
  isRejected,
  isPending,
  isFulfilled,
  nanoid,
  isAsyncThunkAction,
  /* eslint-disable no-unused-vars */
  AnyAction,
  AsyncThunk,
  Dispatch
  /* eslint-disable no-unused-vars */
} from '@reduxjs/toolkit'

// eslint-disable-next-line no-unused-vars
import { createNotification, updateNotification, callback, Notifier } from '..'

/**
 * @description: Given an action, it get tested against a set of possibile action creators
 * If found, return the original creator for that action
 */
const getActionCreator = (
  action: AnyAction,
  creators: AsyncThunk<any, any, {}>[]
) => {
  for (const creator of creators) {
    const isCurrentAction = isAsyncThunkAction(creator)
    if (isCurrentAction(action)) {
      return creator
    }
  }
  return null
}

type ActionCallback = (...args: any[]) => (dispatch: Dispatch<any>) => void
type MiddlewareConf = {
  // TODO: As of now actionDescriptors may be used to use a specifing message when a thunk is pending
  // But it may be useful also for the rejection or fulfilled cases
  actionDescriptors?: {
    pending?: {
      [actionName: string]: string
    }
    rejected?: {
      [actionName: string]: string
    }
  }
  callbacks?: {
    [key: string]: ActionCallback
  }
}

const notificationsMiddleware = (
  asyncThunks: [AsyncThunk<any, any, {}>, ...AsyncThunk<any, any, {}>[]],
  options?: MiddlewareConf
) => {
  const _callbacks: MiddlewareConf['callbacks'] = {
    ...{
      reattemptAction:
        (notificationId: string, { action }) =>
        (dispatch) => {
          const actionCreator = getActionCreator(
            action,
            asyncThunks as AsyncThunk<any, any, {}>[]
          )
          if (isAsyncThunkAction(action) && actionCreator) {
            dispatch(actionCreator(action.meta.arg))
          }
        }
      // Anything else as defaults?
    },
    ...options?.callbacks
  }

  // Callback listener
  const callbackListener = createListenerMiddleware()
  callbackListener.startListening({
    actionCreator: callback,
    effect: async (action, listenerApi) => {
      const { callback, args } = action.payload
      _callbacks[callback] &&
        _callbacks[callback](...args)(listenerApi.dispatch)
    }
  })

  // Separate regular actions creator from asyncthunk
  const isRejectedAction = isRejected(...asyncThunks)

  const rejectedListener = createListenerMiddleware()

  rejectedListener.startListening({
    matcher: isRejectedAction,
    effect: async (action, listenerApi) => {
      const dispatch = listenerApi.dispatch
      const actionType = action.type.replace('/rejected', '')

      // Clears corresponding pending notification
      dispatch(
        updateNotification({
          id: action.meta.requestId,
          active: false
        })
      )

      // Prepare and dispatch error notification
      const errNotification: Notifier.NewNotificationObject = {
        id: nanoid(),
        type: 'error',
        message:
          options?.actionDescriptors?.rejected?.[actionType] ||
          `Something went wrong while processing your request - (${actionType})`,
        clearable: true,
        timestamp: new Date().getTime(),
        actions: [
          {
            label: 'Try again',
            callback: 'reattemptAction',
            payload: {
              action
            }
          }
        ]
      }
      dispatch(createNotification(errNotification))
    }
  })

  const isPendingAction = isPending(...asyncThunks)

  const pendingListener = createListenerMiddleware()

  pendingListener.startListening({
    matcher: isPendingAction,
    effect: async (action, listenerApi) => {
      const dispatch = listenerApi.dispatch
      const actionType = action.type.replace('/pending', '')

      // Prepare and dispatch loading notification
      const loadingNotification: Notifier.NewNotificationObject = {
        id: action.meta.requestId,
        type: 'pending',
        message:
          options?.actionDescriptors?.pending?.[actionType] ||
          `Performing your request - (${actionType})`,
        clearable: false,
        timestamp: new Date().getTime()
      }
      dispatch(createNotification(loadingNotification))
    }
  })

  const isFulfilledAction = isFulfilled(...asyncThunks)

  const fulfilledListener = createListenerMiddleware()

  fulfilledListener.startListening({
    matcher: isFulfilledAction,
    effect: async (action, listenerApi) => {
      const dispatch = listenerApi.dispatch

      // Clears corresponding pending notification
      dispatch(
        updateNotification({
          id: action.meta.requestId,
          active: false
        })
      )
    }
  })
  return {
    pendingListener,
    fulfilledListener,
    rejectedListener,
    callbackListener
  }
}

export default notificationsMiddleware
