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

export class Toolbar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        console.log(props)
    }
    
    public render() {
        return (
            <MuiToolbar>
                <ToolbarGroup firstChild={true}>
                    <RaisedButton icon={ <AvPause style={{ margin: '6px' }} /> } primary={true} />
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle text="20:45" />
                </ToolbarGroup>
                <ToolbarGroup lastChild={true}>
                    <RaisedButton icon={ <Sync style={{ margin: '6px' }} /> } secondary={true}  />
                </ToolbarGroup>
            </MuiToolbar>
        );
    }
}