import { START_KEYLOGGING, STOP_KEYLOGGING } from '../actions/actions';
import isDev from 'electron-is-dev';

const initialState = {

};

export function MainUI (state = initialState, action) {
    
    if (isDev) {
        console.log("MainUI Reducer passed");
        console.log(action);
    }
    
    switch (action.type) {
        default:
            return state;
    }
}