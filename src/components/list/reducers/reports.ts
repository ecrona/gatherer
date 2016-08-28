import { REQUEST_REPORTS, RECEIVE_ALL, RECEIVE_MATCHES, RECEIVE_UNSORTED } from '../actions/fetch-reports'
import { FullReport } from '../models/full-report'
import { Match } from '../models/match'
import { Event } from '../models/event'

export const all = function(state: Array<FullReport> = [], action) {
    switch (action.type) {
        case RECEIVE_ALL:
            return action.reports;
        default:
            return state;
    }
}

export const matches = function(state: Array<Match> = [], action) {
    switch (action.type) {
        case RECEIVE_MATCHES:
            return action.reports;
        default:
            return state;
    }
}

export const unsorted = function(state: Array<Event> = [], action) {
    switch (action.type) {
        case RECEIVE_UNSORTED:
            return action.reports;
        default:
            return state;
    }
}