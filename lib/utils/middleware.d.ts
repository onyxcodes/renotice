import { AnyAction, AsyncThunk, Dispatch } from '@reduxjs/toolkit';
type ActionCallback = (...args: any[]) => (dispatch: Dispatch<any>) => void;
type MiddlewareConf = {
    actionDescriptors?: {
        pending?: {
            [actionName: string]: string;
        };
        rejected?: {
            [actionName: string]: string;
        };
    };
    callbacks?: {
        [key: string]: ActionCallback;
    };
};
declare const notificationsMiddleware: (asyncThunks: [AsyncThunk<any, any, {}>, ...AsyncThunk<any, any, {}>[]], options?: MiddlewareConf) => {
    pendingListener: import("@reduxjs/toolkit").ListenerMiddlewareInstance<unknown, import("@reduxjs/toolkit").ThunkDispatch<unknown, unknown, AnyAction>, unknown>;
    fulfilledListener: import("@reduxjs/toolkit").ListenerMiddlewareInstance<unknown, import("@reduxjs/toolkit").ThunkDispatch<unknown, unknown, AnyAction>, unknown>;
    rejectedListener: import("@reduxjs/toolkit").ListenerMiddlewareInstance<unknown, import("@reduxjs/toolkit").ThunkDispatch<unknown, unknown, AnyAction>, unknown>;
    callbackListener: import("@reduxjs/toolkit").ListenerMiddlewareInstance<unknown, import("@reduxjs/toolkit").ThunkDispatch<unknown, unknown, AnyAction>, unknown>;
};
export default notificationsMiddleware;
