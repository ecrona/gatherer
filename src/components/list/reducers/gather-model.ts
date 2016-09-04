import objectAssign = require('object-assign')

import {
    SET_HOME_TEAM,
    SET_AWAY_TEAM,
    SET_PRIMARY_PLAYER,
    SET_SECONDARY_PLAYER
} from '../actions/set-gather-property'

import { GatherForm } from 'models/gather-form.d'

const initialState: GatherForm = {
    homeTeam: '',
    awayTeam: '',
    primaryPlayer: '',
    secondaryPlayer: ''
};

export const gatherModel = function(state: GatherForm = initialState, action) {
    switch (action.type) {
        case SET_HOME_TEAM:
            return objectAssign({}, state, { homeTeam: action.homeTeam });
        case SET_AWAY_TEAM:
            return objectAssign({}, state, { awayTeam: action.awayTeam });
        case SET_PRIMARY_PLAYER:
            return objectAssign({}, state, { primaryPlayer: action.primaryPlayer });
        case SET_SECONDARY_PLAYER:
            return objectAssign({}, state, { secondaryPlayer: action.secondaryPlayer });
        default:
            return state;
    }
}