import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Shell } from 'components/shell'
import List from 'components/list/list'
import Gather from 'components/gather/gather'

import { Router, Route, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import { viewState } from 'components/list/reducers/view-state'
import { showGatherModal } from 'components/list/reducers/show-gather-modal'
import { all, matches, unsorted } from 'components/list/reducers/reports'
import { fetching } from 'components/list/reducers/fetching'
import { gatherModel } from 'components/list/reducers/gather-model'

import { popups } from 'components/gather/reducers/popups'
import { gather } from 'components/gather/reducers/gather'

import injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const rootReducer = combineReducers({
    list: combineReducers({
        viewState,
        showGatherModal,
        gatherModel,
        fetching,
        all,
        matches,
        unsorted
    }),
    routing: routerReducer,
    gather: combineReducers({
        popups: popups,
        data: gather
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
    },
    gather: {
        time: '33:01',
        showSynchronizeModal: false,
        status: 'play|pause',
        popups: {
            primaryPlayerOverall: false,
            secondaryPlayerOverall: false,
            primaryPlayerAction: false,
            secondaryPlayerAction: false,
            loading: false
        },
        data: {
            fetching: true,
            id: '1',
            primaryPlayer: {},
            secondaryPlayer: {
                name: 'Andrea Barzagli',
                overall: 8,
                actions: [{
                    featured: true,
                    description: 'Tackles',
                    amount: 9
                }]
            }
        }
    },
    /*report: {
        viewState: 'statistics|incremental',
        primaryPlayer: {},
        secondaryPlayer: {}
    }*/
};

const history = useRouterHistory(createHashHistory)({ queryKey: false });
const historyMiddleware = routerMiddleware(history);
const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware, historyMiddleware));

const routes = {
    path: '/',
    component: Shell,
    childRoutes: [{
        path: '/list',
        component: List,
    }, {
        path: '/gather/:id',
        component: Gather,
    }/*, {
        path: '/report',
        component: Report,
    }*/]
};

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history } routes={ routes } />
    </Provider>,
    document.getElementsByClassName('app')[0]
);