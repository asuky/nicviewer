import { takeEvery } from 'redux-saga/effects';

import { START_KEYLOGGING,
         GET_NETWORK_STATUS } from '../actions/actions';

import { startKeyLogging } from './keylogging';
import { getNetworkStatus } from './getnetworkstatus';

export function* allSagas() {
    yield takeEvery(START_KEYLOGGING, startKeyLogging);
    yield takeEvery(GET_NETWORK_STATUS, getNetworkStatus);
}

export default allSagas;