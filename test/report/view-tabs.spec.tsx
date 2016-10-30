import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as TestUtils from 'react-addons-test-utils'

import { Tabs } from 'material-ui/Tabs'
import ViewTabs from '../../src/components/report/view-tabs'
import { ViewState } from '../../src/components/report/models/view-state'

describe('report -> view tabs component', () => {
    let renderer: React.ShallowRenderer;

    beforeEach(() => {
        renderer = TestUtils.createRenderer();
        renderer.render(<ViewTabs 
            frozen={ false }
            tabs={ [] }
            viewState={ ViewState.Statistical }
            setViewState={ () => false }
        />);
    });

    it('should render correctly', () => {
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, Tabs);
    });
});