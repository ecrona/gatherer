import objectAssign = require('object-assign')

import {
    OPEN_PRIMARY_PLAYER_OVERALL,
    OPEN_SECONDARY_PLAYER_OVERALL,
    OPEN_PRIMARY_PLAYER_ACTION,
    OPEN_SECONDARY_PLAYER_ACTION,
    CLOSE
} from '../actions/popups'

import {
    REQUEST_GATHER,
    REQUEST_PLAYER_CHANGE,
    RECEIVE_PRIMARY_PLAYER_OVERALL,
    RECEIVE_PRIMARY_PLAYER_ACTION,
    RECEIVE_SECONDARY_PLAYER_OVERALL,
    RECEIVE_SECONDARY_PLAYER_ACTION
} from '../actions/gather'

const initialState = {
    primaryPlayerOverall: false,
    secondaryPlayerOverall: false,
    primaryPlayerAction: false,
    secondaryPlayerAction: false,
    loading: false
};

export const popups = function(state = initialState, action) {
    switch (action.type) {
        case OPEN_PRIMARY_PLAYER_OVERALL:
            return objectAssign({}, initialState, { primaryPlayerOverall: true });
        case OPEN_SECONDARY_PLAYER_OVERALL:
            return objectAssign({}, initialState, { secondaryPlayerOverall: true });
        case OPEN_PRIMARY_PLAYER_ACTION:
            return objectAssign({}, initialState, { primaryPlayerAction: true });
        case OPEN_SECONDARY_PLAYER_ACTION:
            return objectAssign({}, initialState, { secondaryPlayerAction: true });
        case REQUEST_PLAYER_CHANGE:
            return objectAssign({}, state, { loading: true });
        case RECEIVE_PRIMARY_PLAYER_OVERALL:
        case RECEIVE_PRIMARY_PLAYER_ACTION:
        case RECEIVE_SECONDARY_PLAYER_OVERALL:
        case RECEIVE_SECONDARY_PLAYER_ACTION:
        case CLOSE:
            return objectAssign({}, initialState, { loading: state.loading });
        case REQUEST_GATHER:
            return objectAssign({}, initialState);
        default:
            return state;
    }
}