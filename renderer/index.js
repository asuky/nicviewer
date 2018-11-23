import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import isDev from 'electron-is-dev';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/reducers';
import allSagas from './sagas/allsagas';

import MainUI from './components/MainUI';

import { startKeyLogging, 
         stopKeyLogging,
         getNetworkStatus } from './actions/actions';

import './css/main.css';


const sagaMiddlewares = createSagaMiddleware();
let store;
if (isDev) {
    const logger = createLogger();
    store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddlewares, logger)
    );
} else {
    store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddlewares)
    );
}

sagaMiddlewares.run(allSagas);

function mapStateToProps(state) {
    console.log(state);
    return {
        networkstatus: state.NetworkStatus.networkstatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startKeyLogging: (event) => { dispatch(startKeyLogging(event)) },
        stopKeyLogging: (event) => { dispatch(stopKeyLogging(event)) },
        getNetworkStatus: (event) => { dispatch(getNetworkStatus(event)) }
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainUI);

store.dispatch(getNetworkStatus(null));

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);

