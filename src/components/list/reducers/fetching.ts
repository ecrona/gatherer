import { REQUEST_REPORTS, RECEIVE_ALL, RECEIVE_MATCHES, RECEIVE_UNSORTED } from '../actions/fetch-reports'

export const fetching = function(state: boolean = false, action) {
    switch (action.type) {
        case REQUEST_REPORTS:
            return true;
        case RECEIVE_ALL:
        case RECEIVE_MATCHES:
        case RECEIVE_UNSORTED:
            return false;
        default:
            return state;
    }
}