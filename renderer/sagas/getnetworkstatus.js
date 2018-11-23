import { put, call } from 'redux-saga/effects';
import { isDev } from 'electron-is-dev';
import { ipcRenderer } from 'electron';

import { updateNetworkStatus }  from '../actions/actions';

async function promiseNetworkStatus() {

    return new Promise((resolve, reject) => {
        ipcRenderer.send('networkstatus');
        ipcRenderer.on('networkstatus-reply', (event, arg) => {
            resolve(arg);
        });
    }).then((response) => response);

}

export function* getNetworkStatus() {

    try {
        const data = yield call(promiseNetworkStatus);
        yield put(updateNetworkStatus(data));
    } catch (error) {

    }
}