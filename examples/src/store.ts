import { configureStore, Dispatch } from '@reduxjs/toolkit';
import ui, { UIState } from './features/ui';
import { notificationsMiddleware, notifications, Notifier } from 'renotice';

export type AppState = {
  ui: UIState,
  notifications: Notifier.NotificationObject[]
}

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    ui,
    notifications,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
    // .prepend(
	// 	pendingListener.middleware,
	// 	fulfilledListener.middleware,
	// 	rejectedListener.middleware,
    // callbackListener.middleware
	// )
});

export const getNotifications = (state: AppState) => state.notifications;
