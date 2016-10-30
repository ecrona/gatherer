import { expect } from 'chai'

import { ViewState } from '../../../src/components/report/models/view-state'
import { SET_VIEW_STATE } from '../../../src/components/report/actions/set-view-state'
import { viewState } from '../../../src/components/report/reducers/view-state'

describe('report -> view state reducer', () => {
    it('should return the initial state', () => {
        expect(viewState(undefined, {}))
            .to.equal(ViewState.Statistical);
    });

    it('should handle SET_VIEW_STATE', () => {
        const action = {
            type: SET_VIEW_STATE,
            viewState: ViewState.Incremental
        };

        expect(viewState(ViewState.Statistical, action))
            .to.equal(ViewState.Incremental);
    });
});