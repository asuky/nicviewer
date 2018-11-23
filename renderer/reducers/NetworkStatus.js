import { GET_NETWORK_STATUS, UPDATE_NETWORK_STATUS } from '../actions/actions';
import isDev from 'electron-is-dev';

const initialState = {
    networkstatus: false
};

export function NetworkStatus (state = initialState, action) {
    
    if (isDev) {
        console.log("NetworkStatus Reducer passed");
        console.log(action);
    }
    
    switch (action.type) {

        case GET_NETWORK_STATUS:
            return Object.assign({}, state, {
                networkstatus: "obtaining"
            });
        case UPDATE_NETWORK_STATUS:
            return Object.assign({}, state, {
                networkstatus: action.payload.networkstatus
            });
        default:
            return state;
    }
}