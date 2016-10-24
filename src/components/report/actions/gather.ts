import { Incrementer } from 'utilities/incrementer'
import { Http } from 'utilities/http'
import { Resolver } from 'utilities/resolver'

import { GatherReport } from 'models/gather-report'

export const REQUEST_GATHER = Incrementer.increment();
export const RECEIVE_GATHER = Incrementer.increment();

function requestGather() {
    return {
        type: REQUEST_GATHER
    };
}

function receiveGather(gather: GatherReport) {
    return {
        type: RECEIVE_GATHER,
        gather
    };
}

export function fetchGather(id: number, resolver: Resolver) {
    return function(dispatch) {
        dispatch(requestGather());
        return Http.get('/slow.php', resolver)
            .then(() => {
                dispatch(receiveGather({
                    id: 1,
                    homeTeam: '',
                    awayTeam: '',
                    primaryPlayer: {
                        name: 'Giorgio Chiellini',
                        overall: 9,
                        actions: [{
                            featured: true,
                            description: 'Passes',
                            amount: 7
                        }]
                    },
                    secondaryPlayer: {
                        name: 'Andrea Barzagli',
                        overall: 8,
                        actions: [{
                            featured: true,
                            description: 'Tackles',
                            amount: 9
                        }]
                    },
                    incremental: [
                        ['Tackle', '34', 'Aerial Duel'],
                        ['Forward Rush', '45+2', ''],
                        ['', '88', 'Key pass']
                    ]
                }))
            });
    }
}