import { Incrementer } from 'utilities/incrementer'

export const SET_HOME_TEAM = Incrementer.increment();
export const SET_AWAY_TEAM = Incrementer.increment();
export const SET_PRIMARY_PLAYER = Incrementer.increment();
export const SET_SECONDARY_PLAYER = Incrementer.increment();

export function setHomeTeam(homeTeam: string) {
    return {
        type: SET_HOME_TEAM,
        homeTeam
    };
}

export function setAwayTeam(awayTeam: string) {
    return {
        type: SET_AWAY_TEAM,
        awayTeam
    };
}

export function setPrimaryPlayer(primaryPlayer: string) {
    return {
        type: SET_PRIMARY_PLAYER,
        primaryPlayer
    };
}

export function setSecondaryPlayer(secondaryPlayer: string) {
    return {
        type: SET_SECONDARY_PLAYER,
        secondaryPlayer
    };
}