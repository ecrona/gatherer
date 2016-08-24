import { SET_VIEW_STATE } from '../actions/setViewState'
import { ViewState } from 'components/viewState'

export const viewState = function(state: ViewState = ViewState.List, action) {
    switch (action.type) {
        case SET_VIEW_STATE:
            return action.viewState;
        default:
            return state;
    }
}