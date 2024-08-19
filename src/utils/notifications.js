import { AnyAction, createAction } from '@reduxjs/toolkit'

// eslint-disable-next-line no-unused-vars

const createNotification = createAction(
  'notifications/create'
)

const removeNotification = createAction('notifications/clear')

const clearNotifications = createAction('notifications/clearAll')

const updateNotification = createAction(
  'notifications/update'
)
/* May be useful when notifications are saved in a database
 * and want to restore them at app load
 */
const loadNotifications =
  createAction('notifications/load')


const callback = createAction(
  'notifications/callback',
  (callback, ...args) => {
    return {
      payload: {
        callback,
        args
      }
    }
  }
)

const initialState = [
  //  {
  //     "id": "welcome-notification",
  //     "message": "This is a basic notification!",
  //     "type": "success"
  //   }
]

const notificationsReducer = (
  state = initialState,
  action) => {
  switch (action.type) {
    case createNotification.type:
      /**
       * @var {Notifier.NewNotificationObject} _notification 
       */
      var _notification = action.payload
      console.log("pushing notification with data", { payload: action.payload });
      return [...state, _notification];

    case loadNotifications.type:
       /**
       * @var {Notifier.NewNotificationObject[]} list 
       */
      let list = action.payload;
      return [...state, ...list];

    case updateNotification.type:
      /**
       * @var {Notifier.NewNotificationObject} _notification 
       */
      var _notification = action.payload;
      const index = state.findIndex((el) => el.id === _notification.id)
      const notification = { ...state[index], ..._notification }
      state.splice(index, 1, notification)
      return state;

    case removeNotification.type:
      /**
       * @var {string} id 
       */
      let id = action.payload;
      return state.filter((notification) => notification.id !== action.payload);

    case clearNotifications.type:
      state = initialState;
      return state

    default:
      return state;
  }
};

export {
  createNotification,
  clearNotifications,
  updateNotification,
  removeNotification,
  loadNotifications,
  callback
}
export default notificationsReducer
