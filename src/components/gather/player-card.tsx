import * as React from 'react'

import { MuiTheme } from 'material-ui/styles';
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

import Avatar from 'material-ui/Avatar'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import { transparent } from 'material-ui/styles/colors'

import { Player } from 'models/player'
import { Action } from 'models/action'



interface Props {
    player: Player;
    showOverallPopup: boolean;
    openOverallPopup: () => void;
    closePopup: () => void;
}

export class PlayerCard extends React.Component<Props, any> {
    public context: { muiTheme: MuiTheme };
    public lastElement;

    public static contextTypes: React.ValidationMap<any> = {
        muiTheme: React.PropTypes.object
    };

    constructor(props: Props) {
        super(props);
    }

    public getPrimaryColor(): string {
        return this.context.muiTheme.palette.primary1Color;
    }

    public getAccentColor(): string {
        return this.context.muiTheme.palette.accent1Color;
    }

    public getLeftAvatar(action: Action): JSX.Element {
        if (action.featured) {
            return <ActionGrade color={ this.getAccentColor() } style={{ top: '16px' }} />;
        }

        return <span />;
    }
    
    public trigger(e, fn) {
        this.lastElement = e.currentTarget;
        fn();
    }
    
    public render() {
        const {
            player,
            showOverallPopup,
            openOverallPopup,
            closePopup
        } = this.props;

        return (
            <Paper style={{ width: '50%', marginRight: '8px' }} >
                <List>
                    <div style={{ display: '' }}>
                        <Subheader style={{ display: 'inline-block', width: 'initial' }}>
                            { player.name }
                        </Subheader>
                        <RaisedButton
                            onClick={ (e) => this.trigger(e, openOverallPopup) }
                            label={ player.overall }
                            labelColor={ this.getPrimaryColor() }
                            style={{ display: 'inline-block', float: 'right', marginRight: '16px' }}
                        />
                    </div>
                    <Popover
                        open={ showOverallPopup }
                        anchorEl={ this.lastElement }
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                        onRequestClose={ closePopup }
                    >
                        <Menu>
                            <MenuItem primaryText="Increase" />
                            <MenuItem primaryText="Decrease" />
                        </Menu>
                    </Popover>
                    <Divider />
                    { player.actions.map((action, index) => (
                        <ListItem
                            key={ index }
                            onClick={ (e) => this.trigger(e, openOverallPopup) }
                            primaryText={ action.description }
                            leftAvatar={ this.getLeftAvatar(action) }
                            rightAvatar={
                                <Avatar
                                    color={ this.getAccentColor() }
                                    backgroundColor={ transparent }
                                    style={{ right: 8 }}
                                >
                                    { action.amount }
                                </Avatar>
                            }
                        />
                    ))}
                </List>
            </Paper>
        );
    }
}