import { AnyAction } from 'redux'
// eslint-disable-next-line no-unused-vars
import { Notifier } from '..'

const CREATE_NOTIFICATION = 'notifications/create';

// const createNotification = createAction<Notifier.NewNotificationObject>(
//   'notifications/create'
// )

const createNotification = (payload: Notifier.NewNotificationObject) => ({
  type: CREATE_NOTIFICATION,
  payload,
});


const REMOVE_NOTIFICATION = 'notifications/clear';

// const removeNotification = createAction<string>('notifications/clear')

const removeNotification = (payload: Notifier.NewNotificationObject) => ({
  type: REMOVE_NOTIFICATION,
  payload,
});

const CLEARALL_NOTIFICATION = 'notifications/clearAll';

// const clearNotifications = createAction('notifications/clearAll')

const clearNotifications = (payload: Notifier.NewNotificationObject) => ({
  type: CLEARALL_NOTIFICATION,
  payload,
});

const UPDATE_NOTIFICATION = 'notifications/update';

// const updateNotification = createAction<Notifier.UpdatedNotificationObject>(
//   'notifications/update'
// )

const updateNotification = (payload: Notifier.NewNotificationObject) => ({
  type: UPDATE_NOTIFICATION,
  payload,
});
/* May be useful when notifications are saved in a database
 * and want to restore them at app load
 */
const LOAD_NOTIFICATION = 'notifications/load';

// const loadNotifications =
//   createAction<Notifier.NewNotificationObject[]>('notifications/load')

const loadNotifications = (payload: Notifier.NewNotificationObject) => ({
  type: LOAD_NOTIFICATION,
  payload,
});

interface NotificationActions extends AnyAction{
  payload?: Notifier.NewNotificationObject | Notifier.NewNotificationObject[] | string;
}

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

const initialState: Notifier.NotificationObject[] = [
   {
        "id": "base-notification",
        "message": "This is a basic notification!",
        "type": "success"
    }
]

const notificationsReducer: (state: Notifier.NotificationObject[] | undefined, action: NotificationActions) => (Notifier.NotificationObject)[] = (
  state = initialState,
  action: NotificationActions) => {
  switch (action.type) {
    case CREATE_NOTIFICATION:
      var _notification = action.payload as Notifier.NewNotificationObject;
      console.log("pushing notification with data", { payload: action.payload });
      return [...state, _notification];

    case LOAD_NOTIFICATION:
      let list = action.payload as Notifier.NewNotificationObject[];
      return [...state, ...list];

    case UPDATE_NOTIFICATION:
      var _notification = action.payload as Notifier.NewNotificationObject;
      const index = state.findIndex((el) => el.id === _notification.id)
      const notification = { ...state[index], ..._notification }
      state.splice(index, 1, notification)
      return state;

    case REMOVE_NOTIFICATION:
      let id = action.payload as string;
      return state.filter((notification) => notification.id !== action.payload);

    case CLEARALL_NOTIFICATION:
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
function createAction(arg0: string, arg1: (callback: string, ...args: any[]) => { payload: { callback: string; args: any[]; }; }) {
  throw new Error('Function not implemented.');
}

