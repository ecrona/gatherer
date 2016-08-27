import { TOGGLE_GATHER_MODAL } from '../actions/toggle-gather-modal'

export const showGatherModal = function(state: boolean = false, action) {
    switch (action.type) {
        case TOGGLE_GATHER_MODAL:
            return action.showGatherModal;
        default:
            return state;
    }
}