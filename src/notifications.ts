import { createAction, createReducer } from '@reduxjs/toolkit'
// eslint-disable-next-line no-unused-vars
import { Notifier } from './'

const createNotification = createAction<Notifier.NewNotificationObject>(
  'notifications/create'
)

const removeNotification = createAction<string>('notifications/clear')

const clearNotifications = createAction('notifications/clearAll')

const updateNotification = createAction<Notifier.UpdatedNotificationObject>(
  'notifications/update'
)
/* May be useful when notifications are saved in a database
 * and want to restore them at app load
 */
const loadNotifications =
  createAction<Notifier.NewNotificationObject[]>('notifications/load')

const callback = createAction(
  'notifications/callback',
  (callback: string, ...args: any[]) => {
    return {
      payload: {
        callback,
        args
      }
    }
  }
)

const initialState: Notifier.NotificationObject[] = []

const notifications = createReducer(initialState, (builder) => {
  builder
    .addCase(createNotification, (state, action) => {
      state.push(action.payload)
    })
    .addCase(updateNotification, (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id)
      const notification = { ...state[index], ...action.payload }
      state.splice(index, 1, notification)
    })
    .addCase(removeNotification, (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload)
      state.splice(index, 1)
    })
    .addCase(clearNotifications, (state, action) => {
      state = initialState
    })
    .addCase(loadNotifications, (state, action) => {
      state = [...state, ...action.payload]
    })
})

export {
  createNotification,
  clearNotifications,
  updateNotification,
  removeNotification,
  loadNotifications,
  callback
}
export default notifications
