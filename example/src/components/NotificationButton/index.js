import React from 'react';
import { useAppDispatch } from '../../hooks/index';
import {createNotification} from "renotice"

const NotificationButton = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(createNotification({ id: "trigger-notification", message: 'This is a basic notification!', type: 'success'}));
  };

  return <button onClick={handleClick}>Show Notification</button>;
};

export default NotificationButton;