import * as React from 'react'

import {
    Toolbar as MuiToolbar,
    ToolbarGroup,
    ToolbarSeparator,
    ToolbarTitle
} from 'material-ui/Toolbar'

import RaisedButton from 'material-ui/RaisedButton'
import AvPause from 'material-ui/svg-icons/av/pause'
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow'
import Sync from 'material-ui/svg-icons/notification/sync'

interface Props {
    frozen: boolean;
}

export default class Toolbar extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }
    
    public render() {
        const { frozen } = this.props;

        return (
            <MuiToolbar>
                <ToolbarGroup firstChild={true}>
                    <RaisedButton
                        disabled={ frozen }
                        icon={ <AvPause style={{ margin: '6px' }} /> }
                        primary={true}
                    />
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle text="20:45" />
                </ToolbarGroup>
                <ToolbarGroup lastChild={true}>
                    <RaisedButton
                        disabled={ frozen }
                        icon={ <Sync style={{ margin: '6px' }} /> }
                        secondary={true}
                    />
                </ToolbarGroup>
            </MuiToolbar>
        );
    }
}