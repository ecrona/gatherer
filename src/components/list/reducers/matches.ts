import { REQUEST_REPORTS, RECEIVE_REPORTS } from '../actions/fetch-reports'
import { Match } from '../models/match'

export const matches = function(state: Array<Match> = [], action) {
    switch (action.type) {
        case RECEIVE_REPORTS:
            return action.reports;
        default:
            return state;
    }
}