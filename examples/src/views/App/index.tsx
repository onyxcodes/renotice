import NotificationButton from 'components/NotificationButton';
import { useAppDispatch } from 'hooks/index';
import { useSelector } from 'react-redux';
import { AppState } from 'store';
import { Notifier,NotificationArea } from 'renotice';
import React from 'react';

const App = () => {
    const dispatch = useAppDispatch();
    const notifications = useSelector<AppState, Notifier.NotificationObject[]>( s => s.notifications );
    console.log("react-redux-not,notifications", notifications)
    return <>
        <NotificationArea
            notifications={notifications}
            dispatch={dispatch}
        />
        <NotificationButton />
    </>
}

export default App;