import { expect } from 'chai'

import { gather } from '../../../src/components/report/reducers/gather'
import { REQUEST_GATHER, RECEIVE_GATHER } from '../../../src/components/report/actions/gather'

describe('report -> gather reducer', () => {
    it('should return the initial state', () => {
        expect(gather(undefined, {}))
            .to.deep.equal({
                fetching: true,
                id: 0,
                primaryPlayer: {},
                secondaryPlayer: {},
                incremental: []
            });
    });

    it('should handle REQUEST_GATHER', () => {
        const state = {
            fetching: false,
            id: 3,
            primaryPlayer: { test: true },
            secondaryPlayer: { test: false },
            incremental: [4]
        };

        expect(gather(state, { type: REQUEST_GATHER }))
            .to.deep.equal({
                fetching: true,
                id: 3,
                primaryPlayer: { test: true },
                secondaryPlayer: { test: false },
                incremental: [4]
            })
    });

    it('should handle RECEIVE_GATHER', () => {
        const state = {
            fetching: true,
            id: 3,
            primaryPlayer: { test: true },
            secondaryPlayer: { test: false },
            incremental: [4]
        };

        const action = {
            type: RECEIVE_GATHER,
            gather: {
                id: 4,
                primaryPlayer: { test: false },
                secondaryPlayer: { test: true },
                incremental: [3]
            }
        }

        expect(gather(state, action))
            .to.deep.equal({
                fetching: false,
                id: 4,
                primaryPlayer: { test: false },
                secondaryPlayer: { test: true },
                incremental: [3]
            });
    });
});