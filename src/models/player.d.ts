import { Action } from './action.d'

export interface Player {
    name: string;
    overall: number;
    actions: Array<Action>;
}