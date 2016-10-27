import objectAssign = require('object-assign')
import { Status } from '../models/status'
import { Half } from '../models/half'

import {
    SET_TIME,
    SET_STATUS,
    SET_HALF,
    RESET
} from '../actions/status'

import { SYNCHRONIZE } from '../actions/synchronize-modal'

export const time = function(state = '00:00', action) {
    switch (action.type) {
        case SET_TIME:
        case SYNCHRONIZE:
            return action.time;
        case SET_HALF:
            return action.half === Half.First ? '00:00' : '45:00';
        case RESET:
            return '00:00';
    }

    return state;
}

export const status = function(state = Status.Paused, action) {
    switch (action.type) {
        case SET_STATUS:
            return action.status;
        case SET_HALF:
        case RESET:
            return Status.Paused;
    }

    return state;
}

export const half = function(state = Half.First, action) {
    switch (action.type) {
        case SET_HALF:
        case SYNCHRONIZE:
            return action.half;
        case RESET:
            return Half.First;
    }

    return state;
}