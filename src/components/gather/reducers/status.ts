import objectAssign = require('object-assign')
import { Status } from '../models/status'
import { Half } from '../models/half'

import {
    SET_TIME,
    SET_STATUS,
    SET_HALF
} from '../actions/status'

export const time = function(state = '00:00', action) {
    switch (action.type) {
        case SET_TIME:
            return action.time;
    }

    return state;
}

export const status = function(state = Status.Paused, action) {
    switch (action.type) {
        case SET_STATUS:
            return action.status;
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