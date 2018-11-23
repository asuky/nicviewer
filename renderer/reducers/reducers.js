import { combineReducers } from 'redux';

import { MainUI } from './MainUI';
import { NetworkStatus } from './NetworkStatus';

export const rootReducer = combineReducers({
    MainUI,
    NetworkStatus
});

export default rootReducer;