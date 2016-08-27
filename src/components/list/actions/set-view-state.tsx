import { Incrementer } from 'incrementer'
import { ViewState } from '../models/view-state'

export const SET_VIEW_STATE = Incrementer.increment();

export function setViewState(viewState: ViewState) {
    return {
        type: SET_VIEW_STATE,
        viewState
    };
}