import { createAction } from '@reduxjs/toolkit'

// eslint-disable-next-line no-unused-vars

const createNotification = createAction('notifications/create')

const removeNotification = createAction('notifications/clear')

const clearNotifications = createAction('notifications/clearAll')

const updateNotification = createAction('notifications/update')
/* May be useful when notifications are saved in a database
 * and want to restore them at app load
 */
const loadNotifications = createAction('notifications/load')

const callback = createAction('notifications/callback', (callback, ...args) => {
  return {
    payload: {
      callback,
      args
    }
  }
})

const initialState = [
  //  {
  //     "id": "welcome-notification",
  //     "message": "This is a basic notification!",
  //     "type": "success"
  //   }
]

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case createNotification.type:
      /**
       * @var {Notifier.NewNotificationObject} _notification
       */
      var _notification = action.payload
      return [...state, _notification]

    case loadNotifications.type:
      /**
       * @var {Notifier.NewNotificationObject[]} list
       */
      let list = action.payload
      return [...state, ...list]

    case updateNotification.type:
      /**
       * @var {Notifier.NewNotificationObject} _notification
       */
      var _notification = action.payload
      var index = state.findIndex((el) => el.id === _notification.id)
      // merge notification data
      const notification = { ...state[index], ..._notification }
      //state.splice(index, 1, notification)
      return [...state.slice(0, index), notification, ...state.slice(index + 1)]

    case removeNotification.type:
      /**
       * @var {string} id
       */
      var index = state.findIndex((el) => el.id === action.payload)
      return [...state.slice(0, index), ...state.slice(index + 1)]

    case clearNotifications.type:
      state = initialState
      return state

    default:
      return state
  }
}

export {
  createNotification,
  clearNotifications,
  updateNotification,
  removeNotification,
  loadNotifications,
  callback
}
export default notificationsReducer
