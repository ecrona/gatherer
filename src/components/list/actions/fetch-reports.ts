import { Incrementer } from 'utilities/incrementer'
import { Http } from 'utilities/http'
import { FullReport } from '../models/full-report.d'
import { Match } from '../models/match.d'
import { Event } from '../models/event.d'

export const REQUEST_REPORTS = Incrementer.increment();
export const RECEIVE_ALL = Incrementer.increment();
export const RECEIVE_MATCHES = Incrementer.increment();
export const RECEIVE_UNSORTED = Incrementer.increment();

export function requestReports() {
    return {
        type: REQUEST_REPORTS
    };
}

export function receiveAll(reports: Array<FullReport>) {
    return {
        type: RECEIVE_ALL,
        reports
    };
}

export function receiveMatches(reports: Array<Match>) {
    return {
        type: RECEIVE_MATCHES,
        reports
    };
}

export function receiveUnsorted(reports: Array<Event>) {
    return {
        type: RECEIVE_UNSORTED,
        reports
    };
}

export function fetchAll() {
    return (dispatch) => {
        dispatch(requestReports());
        return Http.get('/slow.php')
            .then(() => {
                dispatch(receiveAll([{
                    id: 3,
                    player: 'Giorgio Chiellini',
                    match: 'Real Madrid - Juventus',
                    date: '2017-03-04',
                    actions: 24,
                    description: 'n/a'
                }]))
            });
    };
}

export function fetchMatches() {
    return (dispatch) => {
        dispatch(requestReports());
        return Http.get('/slow.php')
            .then(() => {
                dispatch(receiveMatches([{
                    id: 3,
                    player: 'Giorgio Chiellini',
                    match: 'Real Madrid - Juventus',
                    date: '2017-03-04',
                    overall: 10,
                    actions: 24
                }]))
            });
    };
}

export function fetchEvents() {
    return (dispatch) => {
        dispatch(requestReports());
        return Http.get('/slow.php')
            .then(() => {
                dispatch(receiveUnsorted([{
                    id: 3,
                    player: 'Andrea Barzagli',
                    match: 'Real Madrid - Juventus',
                    date: '2017-03-04',
                    description: 'Forceful rush through the centre of the pitch'
                }]))
            });
    };
}