# renotice
React notification system to notify and prompt user through redux messages.

[![NPM](https://img.shields.io/npm/v/renotice.svg)](https://www.npmjs.com/package/renotice) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Notifications and toasts are present in every well tailored application, this library provides a simple and extendable implementation to integrate them into your React app.

## Install
You can install renotice from npm, as it follows:
```bash
npm install renotice
```

## Usage
First, you need to add the reducer `notifications` to your Redux store.

In case you haven't migrated to Redux Toolkit yet, the configuration is as follows:
```js
import { notifications } from "renotice"

const store = createStore(notifications, [])
```

While with Redux Toolkit:
```js
import { notifications } from "renotice"

const store = configureStore({
  reducer: {
    ...yourOtherReducers,
    notifications
  }
})
```

To complete the configuration, add the `NotificationArea` component and `notifications` selector to your React view:
```jsx
const View = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(s => s.notifications);
  return <>
    <NotificationArea
      notifications={notifications}
      dispatch={dispatch}
      render={(notification) => {
        return <div key={notification.key} style={{border: "1px solid black", padding: "10px", margin: "10px", backgroundColor: "lightgrey"}}>
          <h3>{notification.message}</h3>
          <p>{notification.type}</p>
          <button onClick={notification.onClose}>X</button>
        </div>
      }}
    />
  </>
}
```

Then from any other components of your application, you can trigger notifications by dispatching the action as it follows:
```jsx
dispatch(
    createNotification({
        id: 'trigger-notification',
        message: 'This is a basic notification!',
        type: 'success'
    })
)
```

### Advanced usage
When using Redux Toolkit you can access advanced features that includes custom actions buttons and automated notifications for async thunk's states:

#### Action buttons
By default, action buttons inside notifications require function mapping to be provided to the middleware builder:

```js
import { notifications, notificationsMiddleware } from "renotice"

const exampleCallback = (
  notificationId,
  payload
) => (dispatch) => {
  const { result } = payload;
  window.alert("Action triggered: "+result);
}

const { callbackListener } = notificationsMiddleware(
  [],
  {
    callbacks: {
      exampleCallback: exampleCallback
    }
  }
);

const store = configureStore({
  reducer: {
    ...yourOtherReducers,
    notifications
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
    .prepend(
    callbackListener.middleware
	)
})
```

When creating a notification there's the option to specify action buttons:
```js
dispatch(
  createNotification({
      id: 'trigger-notification',
      message: 'Notification with actions!',
      actions: [
          { label: 'Yes', callback: 'exampleCallback', payload: {
              result: true
          } },
          { label: 'No', callback: 'exampleCallback', payload: {
              result: false
          } },
      ],
      type: 'info'
  })
)
```

Remember to edit the `NotificationArea`'s render function to access and render as you like the buttons.
For more information look at the example folder.

#### Automated notifications
It's possible to configure automated notifications for specific Async Thunks, by using this configuration:

```js
const { pendingListener, fulfilledListener, rejectedListener } = notificationsMiddleware(
  [fetchExampleData, fetchFailingData],
  {
    actionDescriptors: {
      pending: {
        [fetchExampleData.typePrefix]: 'Loading data..',
      },
      fulfilled: {
        [fetchExampleData.typePrefix]: 'Request completed!',
      },
      rejected: {
        [fetchExampleData.typePrefix]: 'There was a problem while loading data..',
      }
    }
  }
);

// Then prepend the generated middlewares to the store configuration
```

## Building

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Make your edits and improvements in the `src` directory.
4. Run `npm run build` to build the library.
5. Run `npm test` to run tests.

