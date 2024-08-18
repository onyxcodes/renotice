import { AnyAction } from '@reduxjs/toolkit';
import { Notifier } from '..';
declare const createNotification: import("@reduxjs/toolkit").ActionCreatorWithPayload<Notifier.NewNotificationObject, string>;
declare const removeNotification: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>;
declare const clearNotifications: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"notifications/clearAll">;
declare const updateNotification: import("@reduxjs/toolkit").ActionCreatorWithPayload<Notifier.UpdatedNotificationObject, string>;
declare const loadNotifications: import("@reduxjs/toolkit").ActionCreatorWithPayload<Notifier.NewNotificationObject[], string>;
interface NotificationActions extends AnyAction {
    payload?: Notifier.NewNotificationObject | Notifier.NewNotificationObject[] | string;
}
declare const callback: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[callback: string, ...args: any[]], {
    callback: string;
    args: any[];
}, "notifications/callback", never, never>;
declare const notificationsReducer: (state: Notifier.NotificationObject[] | undefined, action: NotificationActions) => (Notifier.NotificationObject)[];
export { createNotification, clearNotifications, updateNotification, removeNotification, loadNotifications, callback };
export default notificationsReducer;
