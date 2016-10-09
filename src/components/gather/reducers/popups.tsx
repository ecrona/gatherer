import objectAssign = require('object-assign')

import {
    OPEN_PRIMARY_PLAYER_OVERALL,
    CLOSE
} from '../actions/popups'

const initialState = {
    primaryPlayerOverall: false,
    secondaryPlayerOverall: false,
    primaryPlayerAction: false,
    secondaryPlayerAction: false
};

export const popups = function(state = initialState, action) {
    switch (action.type) {
        case OPEN_PRIMARY_PLAYER_OVERALL:
            return objectAssign({}, initialState, { primaryPlayerOverall: true });
        case CLOSE:
            return objectAssign({}, initialState);
        default:
            return state;
    }
}