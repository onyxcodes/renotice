import React from 'react'

import { NotificationArea, notifications } from 'renotice'
import { useAppDispatch, useAppSelector } from './hooks'
import {NotificationButton, ApiButton, FailingApiButton} from './components/Buttons'

const App = () => {
  const dispatch = useAppDispatch()
  const notifications = useAppSelector(s => s.notifications)
  return <>
    <h1>Renotice Example</h1>
    <NotificationButton />
    <ApiButton />
    <FailingApiButton />
    <NotificationArea
      notifications={notifications}
      dispatch={dispatch}
      render={(notification) => {
        return <div key={notification.key}style={{border: "1px solid black", padding: "10px", margin: "10px", backgroundColor: "lightgrey"}}>
          <h3>{notification.message}</h3>
          <p>{notification.type}</p>
          <button onClick={notification.onClose}>X</button>
        </div>
      }}
    />
  </>
}

export default App
