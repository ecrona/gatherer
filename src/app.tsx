import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Shell } from 'components/shell'
import List from 'components/list/list';

import { Router, Route, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

import { viewState } from 'components/list/reducers/view-state'
import { showGatherModal } from 'components/list/reducers/show-gather-modal';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const rootReducer = combineReducers({
    list: combineReducers({
        viewState: viewState,
        showGatherModal: showGatherModal
    })
});

const initialState = {
    //viewState: 1,
    list: {
        showGatherModal: false,
        viewState: 2
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

const store = createStore(rootReducer, initialState);

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