import { expect } from 'chai'

import { ViewState } from '../../../src/components/report/models/view-state'
import { SET_VIEW_STATE, setViewState } from '../../../src/components/report/actions/set-view-state'

describe('report -> gather reducer', () => {
    it('should return the initial state', () => {
        expect(setViewState(ViewState.Incremental))
            .to.deep.equal({
                type: SET_VIEW_STATE,
                viewState: ViewState.Incremental
            });
    });
});