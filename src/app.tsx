import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Shell } from 'components/shell'
import List from 'components/list/list';

import { Router, Route, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { viewState } from 'components/list/reducers/view-state'
import { showGatherModal } from 'components/list/reducers/show-gather-modal'
import { matches } from 'components/list/reducers/matches'
import { fetching } from 'components/list/reducers/fetching'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const rootReducer = combineReducers({
    list: combineReducers({
        viewState: viewState,
        showGatherModal: showGatherModal,
        matches: matches,
        fetching: fetching
    })
});

const initialState = {
    //viewState: 1,
    list: {
        showGatherModal: false,
        viewState: 2,
        fetching: false,
        matches: []
    }
    /*gather: {
        showSynchronizeModal: false,
        status: 'play|pause',
        time: '33:01',
        primaryPlayer: {},
        secondaryPlayer: {}
    },
    report: {
        viewState: 'statistics|incremental',
        primaryPlayer: {},
        secondaryPlayer: {}
    }*/
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));

const routes = {
    path: '/',
    component: Shell,
    childRoutes: [{
        path: '/list',
        component: List,
    }/*, {
        path: '/gather',
        component: Gather,
    }, {
        path: '/report',
        component: Report,
    }*/]
};

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ appHistory } routes={ routes } />
    </Provider>,
    document.getElementsByClassName('app')[0]
);