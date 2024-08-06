import { Notifier } from './';
declare const createNotification: import("@reduxjs/toolkit").ActionCreatorWithPayload<Notifier.NewNotificationObject, string>;
declare const removeNotification: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>;
declare const clearNotifications: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"notifications/clearAll">;
declare const updateNotification: import("@reduxjs/toolkit").ActionCreatorWithPayload<Notifier.UpdatedNotificationObject, string>;
declare const loadNotifications: import("@reduxjs/toolkit").ActionCreatorWithPayload<Notifier.NewNotificationObject[], string>;
declare const callback: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[callback: string, ...args: any[]], {
    callback: string;
    args: any[];
}, "notifications/callback", never, never>;
declare const notifications: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<Notifier.NotificationObject[]>;
export { createNotification, clearNotifications, updateNotification, removeNotification, loadNotifications, callback };
export default notifications;
