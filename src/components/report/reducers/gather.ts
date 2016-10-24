import objectAssign = require('object-assign')

import {
    REQUEST_GATHER,
    RECEIVE_GATHER
} from '../actions/gather'

const initialState = {
    fetching: true,
    id: 0,
    primaryPlayer: {},
    secondaryPlayer: {},
    incremental: []
};

export const gather = function(state = initialState, action) {
    switch (action.type) {
        case REQUEST_GATHER:
            return objectAssign({}, state);
        case RECEIVE_GATHER:
            return objectAssign({}, initialState, {
                fetching: false,
                id: action.gather.id,
                primaryPlayer: action.gather.primaryPlayer,
                secondaryPlayer: action.gather.secondaryPlayer,
                incremental: action.gather.incremental
            });
        default:
            return state;
    }
}