import { Incrementer } from 'utilities/incrementer'

export const OPEN_PRIMARY_PLAYER_OVERALL = Incrementer.increment();
export const OPEN_SECONDARY_PLAYER_OVERALL = Incrementer.increment();
export const OPEN_PRIMARY_PLAYER_ACTION = Incrementer.increment();
export const OPEN_SECONDARY_PLAYER_ACTION = Incrementer.increment();
export const CLOSE = Incrementer.increment();

export function openPrimaryPlayerOverall() {
    return {
        type: OPEN_PRIMARY_PLAYER_OVERALL
    };
}

export function openSecondaryPlayerOverall() {
    return {
        type: OPEN_SECONDARY_PLAYER_OVERALL
    };
}

export function openPrimaryPlayerAction() {
    return {
        type: OPEN_PRIMARY_PLAYER_ACTION
    };
}

export function openSecondaryPlayerAction() {
    return {
        type: OPEN_SECONDARY_PLAYER_ACTION
    };
}

export function close() {
    return {
        type: CLOSE
    };
}