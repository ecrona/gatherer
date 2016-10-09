import { Incrementer } from 'utilities/incrementer'

export const OPEN_PRIMARY_PLAYER_OVERALL = Incrementer.increment();
export const CLOSE = Incrementer.increment();

export function openPrimaryPlayerOverall() {
    return {
        type: OPEN_PRIMARY_PLAYER_OVERALL
    };
}

export function close() {
    return {
        type: CLOSE
    };
}