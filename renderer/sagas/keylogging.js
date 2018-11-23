import { put, call } from 'redux-saga/effects';
import { isDev } from 'electron-is-dev';
import { ipcRenderer } from 'electron';

async function activateLogger() {
    ipcRenderer.send('test-message', 'test');
    return ipcRenderer.on("test-reply", (event, arg) => {
        console.log(arg);
        return arg;
    });
}

export function* startKeyLogging() {

    if (isDev) { console.log("StartKeyLogging Saga Activated"); }

    try {
        const data = yield call(activateLogger);
        data.then((result) => {console.log(result);});
    } catch (error) {

    }
}