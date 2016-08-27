import { Incrementer } from 'incrementer'

export const TOGGLE_GATHER_MODAL = Incrementer.increment();

export function toggleGatherModal(showGatherModal: boolean) {
    return {
        type: TOGGLE_GATHER_MODAL,
        showGatherModal
    };
}