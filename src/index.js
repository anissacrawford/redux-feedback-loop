import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

let feeling = ""
let understanding = ""
let support = ""
let comments = ""

const feelingsReducer = (state = feeling, action) => {
    if (action.type === 'SET_FEELINGS'){
        return action.payload
    }
    return state;
}

const understandingReducer = (state = understanding, action) => {
    if (action.type === 'SET_UNDERSTANDING'){
        return action.payload
    }
    return state;
}

const supportReducer = (state = support, action) => {
    if (action.type === 'SET_SUPPORT'){
        return action.payload
    }
    return state;
}

const commentsReducer = (state = comments, action) => {
    if (action.type === 'SET_COMMENTS'){
        return action.payload
    }
    return state;
}


const reduxStore = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
