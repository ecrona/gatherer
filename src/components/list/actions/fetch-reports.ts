import { Incrementer } from 'utilities/incrementer'
import { Http } from 'utilities/http';
import { Match } from '../models/match'

export const REQUEST_REPORTS = Incrementer.increment();
export const RECEIVE_REPORTS = Incrementer.increment();

export function requestReports() {
    return {
        type: REQUEST_REPORTS
    };
}
export function receiveReports(reports: Array<Match>) {
    return {
        type: RECEIVE_REPORTS,
        reports
    };
}

export function fetchReports() {
    return (dispatch) => {
        dispatch(requestReports());
        return Http.get('/slow.php')
            .then(() => {
                dispatch(receiveReports([{
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