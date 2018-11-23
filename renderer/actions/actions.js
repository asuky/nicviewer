import isDev from 'electron-is-dev';

export const START_KEYLOGGING='START_KEYLOGGING';
export const STOP_KEYLOGGING='STOP_KEYLOGGING';
export const GET_NETWORK_STATUS='SHOW_NETWORK_STATUS';
export const UPDATE_NETWORK_STATUS='UPDATE_NETWORK_STATUS';

export function startKeyLogging(event) {

    if (isDev) {
        console.log("startLogging fired");
        console.log(event);
    }
    return {
        type: START_KEYLOGGING
    }
}

export function stopKeyLogging() {
    if (isDev) { console.log("stopLogging fired"); }
    return {
        type: STOP_KEYLOGGING
    }
}

export function getNetworkStatus() {
    if (isDev) { console.log("getNetworkStatus fired"); }
    return {
        type: GET_NETWORK_STATUS
    }

}

export function updateNetworkStatus(data) {
    if (isDev) {
        console.log("updateNetworkStatus fired");
        console.log(data);
    }
    return {
        type: UPDATE_NETWORK_STATUS,
        payload: {
            networkstatus: data
        }
    }
}