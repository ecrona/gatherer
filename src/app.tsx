import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Router, Route, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './root-reducer'
import initialState from './initial-state'
import routes from './routes'

import * as injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

const history = useRouterHistory(createHashHistory)({ queryKey: false });
const historyMiddleware = routerMiddleware(history);
const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware, historyMiddleware));

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history } routes={ routes } />
    </Provider>,
    document.getElementsByClassName('app')[0]
);