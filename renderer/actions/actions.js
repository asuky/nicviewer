import isDev from 'electron-is-dev';

export const GET_NETWORK_STATUS='SHOW_NETWORK_STATUS';
export const UPDATE_NETWORK_STATUS='UPDATE_NETWORK_STATUS';

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