import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import RaisedButton from 'material-ui/RaisedButton'
import AvPause from 'material-ui/svg-icons/av/pause'
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow'
import Sync from 'material-ui/svg-icons/notification/sync'


import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'

import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

import Avatar from 'material-ui/Avatar'
import {pinkA200, transparent} from 'material-ui/styles/colors'
import ActionGrade from 'material-ui/svg-icons/action/grade'

const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '764px'
};

interface Props {
    dispatch: (any) => void;
}

class Gather extends React.Component<Props, any> {
    //private resolver: Resolver;

    constructor(props: Props) {
        super(props);
        console.log(props)
    }
    
    public render() {
        const {
            dispatch
        } = this.props;

        return (
            <div>
                <AppBar
                    style={{ marginBottom: '24px' }}
                    title="Gatherer"
                    showMenuIconButton={ false }
                    iconElementRight={
                        <FlatButton
                            onClick={ () => true }
                            label="Done"
                        />
                    }
                />
                <Paper style={{ maxWidth: '1280px', margin: '0 auto' }}>
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <RaisedButton icon={ <AvPause style={{ margin: '6px' }} /> } primary={true} />
        </ToolbarGroup>

        <ToolbarGroup>
          <ToolbarTitle text="20:45" />
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
          <RaisedButton icon={ <Sync style={{ margin: '6px' }} /> } secondary={true}  />
        </ToolbarGroup>
      </Toolbar>
                    { false ?
                        <div style={{ textAlign: 'center', padding: '10px' }}>
                            <CircularProgress />
                        </div>
                    :
                        <div style={{ display: 'flex', padding: '10px' }}>
                        <Paper style={{ width: '50%', marginRight: '8px' }} >
                        
                            <List>
                                <div style={{ display: '' }}>
                                    <Subheader style={{ display: 'inline-block', width: 'initial' }}>Andrea Barzagli</Subheader>
                                    <RaisedButton
                                        onTouchTap={ () => false }
                                        label="8"
                                        style={{ display: 'inline-block', float: 'right', marginRight: '16px' }}
                                    />
                                </div>
                                <Popover
                                    open={ false }
                                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                    onRequestClose={ () => true }
                                >
                                    <Menu>
                                        <MenuItem primaryText="+" />
                                        <MenuItem primaryText="-" />
                                    </Menu>
                                </Popover>
                                <Divider />
                                <ListItem
                                    primaryText="Tackles"
                                    leftAvatar={ <ActionGrade color={pinkA200} style={{top: '16px'}} /> }
                                    rightAvatar={
                                        <Avatar
                                            color={pinkA200} backgroundColor={transparent}
                                            style={{right: 8}}
                                            >
                                            9
                                        </Avatar>}
                                    />
                                <ListItem
                                    primaryText="Aerial duels"
                                    insetChildren={true}
                                    rightAvatar={
                                        <Avatar
                                            color={pinkA200} backgroundColor={transparent}
                                            style={{right: 8}}
                                            >
                                            7
                                        </Avatar>}
                                    />
                                <ListItem
                                    primaryText="Salty passes"
                                    insetChildren={true}
                                    rightAvatar={
                                        <Avatar
                                            color={pinkA200} backgroundColor={transparent}
                                            style={{right: 8}}
                                            >
                                            3
                                        </Avatar>}
                                    />
                            </List>
                        </Paper>
                        <Paper style={{ width: '50%', marginLeft: '8px' }} >
                            To you!
                        </Paper>
                        </div>
                    }
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Gather);