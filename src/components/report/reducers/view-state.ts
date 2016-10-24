import { SET_VIEW_STATE } from '../actions/set-view-state'
import { ViewState } from '../models/view-state'

export const viewState = function(state: ViewState = ViewState.Statistical, action) {
    switch (action.type) {
        case SET_VIEW_STATE:
            return action.viewState;
        default:
            return state;
    }
}