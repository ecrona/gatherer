import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Shell from 'components/shell';

import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import { viewState } from 'components/reducers/viewState';
import { test } from 'components/test';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const rootReducer = combineReducers({
    viewState: viewState,
    test: test
});

const initialState = {
    viewState: 1,
    test: false
};

const store = createStore(rootReducer, initialState);

const routes = {
    path: '/',
    component: Shell,
    childRoutes: []
};

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ appHistory }>
            <Route path="/" component={ Shell }>
            </Route>
        </Router>
    </Provider>,
    document.getElementsByClassName('app')[0]
);