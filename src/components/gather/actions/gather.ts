import { Incrementer } from 'utilities/incrementer'
import { Http } from 'utilities/http'
import { Resolver } from 'utilities/resolver'

import { GatherReport } from 'models/gather-report'
import { Action } from 'models/action'

export const REQUEST_GATHER = Incrementer.increment();
export const RECEIVE_GATHER = Incrementer.increment();
export const REQUEST_PLAYER_CHANGE = Incrementer.increment();
export const RECEIVE_PRIMARY_PLAYER_OVERALL = Incrementer.increment();
export const RECEIVE_PRIMARY_PLAYER_ACTION = Incrementer.increment();
export const RECEIVE_SECONDARY_PLAYER_OVERALL = Incrementer.increment();
export const RECEIVE_SECONDARY_PLAYER_ACTION = Incrementer.increment();

function requestGather() {
    return {
        type: REQUEST_GATHER
    };
}

function receiveGather(gather: GatherReport) {
    return {
        type: RECEIVE_GATHER,
        gather
    };
}

function requestPlayerChange() {
    return {
        type: REQUEST_PLAYER_CHANGE
    };
}

export function increasePrimaryPlayerOverall(resolver: Resolver) {
    return function(dispatch) {
        dispatch(requestPlayerChange());
        return Http.get('/slow.php', resolver)
            .then(() => {
                dispatch({
                    type: RECEIVE_PRIMARY_PLAYER_OVERALL,
                    overall: 10
                });
            });
    }
}

export function decreasePrimaryPlayerOverall(resolver: Resolver) {
    return function(dispatch) {
        dispatch(requestPlayerChange());
        return Http.get('/slow.php', resolver)
            .then(() => {
                dispatch({
                    type: RECEIVE_PRIMARY_PLAYER_OVERALL,
                    overall: 8
                });
            });
    }
}

export function increaseSecondaryPlayerOverall(resolver: Resolver) {
    return function(dispatch) {
        dispatch(requestPlayerChange());
        return Http.get('/slow.php', resolver)
            .then(() => {
                dispatch({
                    type: RECEIVE_SECONDARY_PLAYER_OVERALL,
                    overall: 9
                });
            });
    }
}

export function decreaseSecondaryPlayerOverall(resolver: Resolver) {
    return function(dispatch) {
        dispatch(requestPlayerChange());
        return Http.get('/slow.php', resolver)
            .then(() => {
                dispatch({
                    type: RECEIVE_SECONDARY_PLAYER_OVERALL,
                    overall: 7
                });
            });
    }
}

export function increasePrimaryPlayerAction(action: Action, resolver: Resolver) {
    return function(dispatch) {
        dispatch(requestPlayerChange());
        return Http.get('/slow.php', resolver)
            .then(() => {
                dispatch({
                    type: RECEIVE_PRIMARY_PLAYER_ACTION,
                    actions: [{
                        featured: true,
                        description: 'Passes',
                        amount: 8
                    }]
                });
            });
    }
}

export function decreasePrimaryPlayerAction(action: Action, resolver: Resolver) {
    return function(dispatch) {
        dispatch(requestPlayerChange());
        return Http.get('/slow.php', resolver)
            .then(() => {
                dispatch({
                    type: RECEIVE_PRIMARY_PLAYER_ACTION,
                    actions: [{
                        featured: true,
                        description: 'Passes',
                        amount: 6
                    }]
                });
            });
    }
}

export function increaseSecondaryPlayerAction(action: Action, resolver: Resolver) {
    return function(dispatch) {
        dispatch(requestPlayerChange());
        return Http.get('/slow.php', resolver)
            .then(() => {
                dispatch({
                    type: RECEIVE_SECONDARY_PLAYER_ACTION,
                    actions: [{
                        featured: true,
                        description: 'Tackles',
                        amount: 10
                    }]
                });
            });
    }
}

export function decreaseSecondaryPlayerAction(action: Action, resolver: Resolver) {
    return function(dispatch) {
        dispatch(requestPlayerChange());
        return Http.get('/slow.php', resolver)
            .then(() => {
                dispatch({
                    type: RECEIVE_SECONDARY_PLAYER_ACTION,
                    actions: [{
                        featured: true,
                        description: 'Tackles',
                        amount: 8
                    }]
                });
            });
    }
}

export function fetchGather(id: number, resolver: Resolver) {
    return function(dispatch) {
        dispatch(requestGather());
        return Http.get('/slow.php', resolver)
            .then(() => {
                dispatch(receiveGather({
                    id: 1,
                    homeTeam: '',
                    awayTeam: '',
                    primaryPlayer: {
                        name: 'Giorgio Chiellini',
                        overall: 9,
                        actions: [{
                            featured: true,
                            description: 'Passes',
                            amount: 7
                        }]
                    },
                    secondaryPlayer: {
                        name: 'Andrea Barzagli',
                        overall: 8,
                        actions: [{
                            featured: true,
                            description: 'Tackles',
                            amount: 9
                        }]
                    }
                }))
            });
    }
}