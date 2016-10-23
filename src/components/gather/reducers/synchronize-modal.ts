import objectAssign = require('object-assign')
import { Status } from '../models/status'
import { Half } from '../models/half'

import {
    TOGGLE_ACTIVE,
    SET_HALF,
    SET_MINUTES,
    SET_SECONDS,
    SYNCHRONIZE
} from '../actions/synchronize-modal'

export const active = function(state = false, action) {
    switch (action.type) {
        case TOGGLE_ACTIVE:
            return action.active;
        case SYNCHRONIZE:
            return false;
    }

    return state;
}

export const half = function(state = Half.First, action) {
    switch (action.type) {
        case SET_HALF:
            return action.half;
    }

    return state;
}

export const minutes = function(state = '00', action) {
    switch (action.type) {
        case SET_MINUTES:
            return action.minutes;
    }

    return state;
}

export const seconds = function(state = '00', action) {
    switch (action.type) {
        case SET_SECONDS:
            return action.seconds;
    }

    return state;
}