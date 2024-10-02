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
// import {MiddlewareConf} from '../types'
// eslint-disable-next-line no-unused-vars
import {
  createNotification,
  removeNotification,
  updateNotification,
  callback,
  Notifier
} from '..'

/**
 * @description: Given an action, it get tested against a set of possibile action creators
 * If found, return the original creator for that action
 * @param {AnyAction} action
 * @param {AsyncThunk<any, any, {}>[]} creators
 */
const getActionCreator = (action, creators) => {
  for (const creator of creators) {
    const isCurrentAction = isAsyncThunkAction(creator)
    if (isCurrentAction(action)) {
      return creator
    }
  }
  return null
}

/**
 * @param {AsyncThunk<any, any, {}>[]} asyncThunks
 * @param {MiddlewareConf} options [optional]
 */
const notificationsMiddleware = (asyncThunks, options) => {
  const _callbacks = {
    ...{
      reattemptAction:
        (notificationId, { action }) =>
        (dispatch) => {
          const actionCreator = getActionCreator(action, asyncThunks)
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
      dispatch(removeNotification(action.meta.requestId))

      // Prepare and dispatch error notification
      const errNotification = {
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
      const loadingNotification = {
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
      dispatch(removeNotification(action.meta.requestId))
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
