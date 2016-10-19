import objectAssign = require('object-assign')

import {
    REQUEST_GATHER,
    RECEIVE_GATHER,
    RECEIVE_PRIMARY_PLAYER_OVERALL,
    RECEIVE_PRIMARY_PLAYER_ACTION,
    RECEIVE_SECONDARY_PLAYER_OVERALL,
    RECEIVE_SECONDARY_PLAYER_ACTION
} from '../actions/gather'

const initialState = {
    fetching: true,
    id: 0,
    primaryPlayer: {},
    secondaryPlayer: {}
};

export const gather = function(state = initialState, action) {
    switch (action.type) {
        case REQUEST_GATHER:
            return objectAssign({}, initialState);
        case RECEIVE_GATHER:
            return objectAssign({}, initialState, {
                fetching: false,
                id: action.gather.id,
                primaryPlayer: action.gather.primaryPlayer,
                secondaryPlayer: action.gather.secondaryPlayer
            });
        case RECEIVE_PRIMARY_PLAYER_OVERALL:
            return objectAssign({}, state, {
                primaryPlayer: objectAssign({}, state.primaryPlayer, { overall: action.overall })
            });
        case RECEIVE_SECONDARY_PLAYER_OVERALL:
            return objectAssign({}, state, {
                secondaryPlayer: objectAssign({}, state.secondaryPlayer, { overall: action.overall })
            });
        case RECEIVE_PRIMARY_PLAYER_ACTION:
            return objectAssign({}, state, {
                primaryPlayer: objectAssign({}, state.primaryPlayer, { actions: action.actions }) 
            });
        case RECEIVE_SECONDARY_PLAYER_ACTION:
            return objectAssign({}, state, {
                secondaryPlayer: objectAssign({}, state.secondaryPlayer, { actions: action.actions }) 
            });
        default:
            return state;
    }
}