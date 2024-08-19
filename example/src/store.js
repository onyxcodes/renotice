import { configureStore, Dispatch } from '@reduxjs/toolkit';
import api, { fetchExampleData } from './features/api';
import { notificationsMiddleware, notifications } from 'renotice';

const exampleCallback = (
    notificationId, 
    payload
  ) => (dispatch) => {
    const { result } = payload;
    window.alert("Closed notification");
    // dispatch(removeNotification(notificationId));
}
  

const { pendingListener, fulfilledListener, rejectedListener, callbackListener } = notificationsMiddleware(
    [fetchExampleData],
    {
      actionDescriptors: {
        pending: {
          [fetchExampleData.typePrefix]: 'Loading data..',
        },
        rejected: {
          [fetchExampleData.typePrefix]: 'There was a problem while loading data..',
        }
      },
      callbacks: {
        exampleCallback: exampleCallback
      }
    }
  );

export const store = configureStore({
  reducer: {
    api,
    notifications,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
    .prepend(
		pendingListener.middleware,
		fulfilledListener.middleware,
		rejectedListener.middleware,
    callbackListener.middleware
	)
});

// export const getNotifications = (state: AppState) => state.notifications;
