import * as React from 'react'

import { Tabs, Tab } from 'material-ui/Tabs'
import { TabItem } from './models/tab-item.d'
import { ViewState } from './models/view-state'

interface Props {
    tabs: Array<TabItem>;
    viewState: ViewState;
    setViewState: (viewState: ViewState) => void;
}

export class ViewTabs extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }
    
    public render() {
        return (
            <Tabs value={ this.props.viewState }>
                { this.props.tabs.map((tab) => (
                    <Tab
                        key={ tab.viewState }
                        onClick={ () => this.props.setViewState(tab.viewState) }
                        label={ tab.title }
                        value={ tab.viewState }
                    />
                )) }
            </Tabs>
        );
    }
}