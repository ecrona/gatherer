import { Incrementer } from 'utilities/incrementer'
import { Half } from '../models/half'

export const TOGGLE_ACTIVE = Incrementer.increment();
export const SET_HALF = Incrementer.increment();
export const SET_MINUTES = Incrementer.increment();
export const SET_SECONDS = Incrementer.increment();
export const SYNCHRONIZE = Incrementer.increment();

export function toggleActive(active: boolean) {
    return {
        type: TOGGLE_ACTIVE,
        active
    };
}

export function setHalf(half: Half) {
    return {
        type: SET_HALF,
        half
    };
}

export function setMinutes(minutes: string) {
    return {
        type: SET_MINUTES,
        minutes
    };
}

export function setSeconds(seconds: string) {
    return {
        type: SET_SECONDS,
        seconds
    };
}

export function synchronize(minutes, seconds, half) {
    return {
        type: SYNCHRONIZE,
        time: `${minutes}:${seconds}`,
        half
    }
}