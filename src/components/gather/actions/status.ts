import { Incrementer } from 'utilities/incrementer'
import { Status } from '../models/status'
import { Half } from '../models/half'

export const SET_TIME = Incrementer.increment();
export const SET_STATUS = Incrementer.increment();
export const SET_HALF = Incrementer.increment();
export const RESET = Incrementer.increment();

export function setTime(time: string) {
    return {
        type: SET_TIME,
        time
    };
}

export function setStatus(status: Status) {
    return {
        type: SET_STATUS,
        status
    };
}

export function setHalf(half: Half) {
    return {
        type: SET_HALF,
        half
    };
}

export function reset() {
    return {
        type: RESET
    };
}