import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const feelingsReducer = (state = [], action) => {
    if (action.type === 'SET_FEELINGS'){
        return action.payload
    }
    return state;
}

const understandingReducer = (state = [], action) => {
    if (action.type === 'SET_UNDERSTANDING'){
        return action.payload
    }
    return state;
}

const supportedReducer = (state = [], action) => {
    if (action.type === 'SET_SUPPORT'){
        return action.payload
    }
    return state;
}

const commentsReducer = (state = [], action) => {
    if (action.type === 'SET_COMMENTS'){
        return action.payload
    }
    return state;
}


const reduxStore = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer,
        supportedReducer,
        commentsReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
