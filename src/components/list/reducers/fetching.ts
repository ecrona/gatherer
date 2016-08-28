import { REQUEST_REPORTS, RECEIVE_REPORTS } from '../actions/fetch-reports'

export const fetching = function(state: boolean = false, action) {
    switch (action.type) {
        case REQUEST_REPORTS:
            return true;
        case RECEIVE_REPORTS:
            return false;
        default:
            return state;
    }
}