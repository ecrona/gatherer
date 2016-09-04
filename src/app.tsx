import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Shell } from 'components/shell'
import List from 'components/list/list'

import { Router, Route, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { viewState } from 'components/list/reducers/view-state'
import { showGatherModal } from 'components/list/reducers/show-gather-modal'
import { all, matches, unsorted } from 'components/list/reducers/reports'
import { fetching } from 'components/list/reducers/fetching'
import { gatherModel } from 'components/list/reducers/gather-model';

import injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const rootReducer = combineReducers({
    list: combineReducers({
        viewState,
        showGatherModal,
        gatherModel,
        fetching,
        all,
        matches,
        unsorted
    })
});

const initialState = {
    //viewState: 1,
    list: {
        viewState: 2,
        showGatherModal: false,
        gatherModel: {
            homeTeam: '',
            awayTeam: '',
            primaryPlayer: '',
            secondaryPlayer: ''
        },
        fetching: false,
        all: [],
        matches: [],
        unsorted: []
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