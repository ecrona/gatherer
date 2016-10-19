import * as React from 'react'

import { MuiTheme } from 'material-ui/styles';
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import { Popover, PopoverAnimationVertical } from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'

import Avatar from 'material-ui/Avatar'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import { transparent } from 'material-ui/styles/colors'

import { Popup } from './popup'

import { Player } from 'models/player'
import { Action } from 'models/action'

interface Props {
    player: Player;
    showOverallPopup: boolean;
    openOverallPopup: () => void;
    increaseOverall: () => void;
    decreaseOverall: () => void;
    showActionPopup: boolean;
    openActionPopup: () => void;
    increaseAction: (action: Action) => void;
    decreaseAction: (action: Action) => void;
    popupLoading: boolean;
    closePopup: () => void;
}

export class PlayerCard extends React.Component<Props, any> {
    public context: { muiTheme: MuiTheme };
    public selectedElement;
    public selectedAction;

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
    
    public trigger(e, fn: () => void) {
        this.selectedElement = e.currentTarget;
        fn();
    }

    public clickAction(e, action: Action, fn: () => void) {
        this.selectedAction = action;
        this.trigger(e, fn);
    }

    public increase() {
        if (this.props.showOverallPopup) {
            this.props.increaseOverall();
        } else {
            this.props.increaseAction(this.selectedAction);
        }
    }

    public decrease() {
        if (this.props.showOverallPopup) {
            this.props.decreaseOverall();
        } else {
            this.props.decreaseAction(this.selectedAction);
        }
    }
    
    public render() {
        const {
            player,
            showOverallPopup,
            openOverallPopup,
            showActionPopup,
            openActionPopup,
            popupLoading,
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
                    <Popup
                        show={ showOverallPopup || showActionPopup }
                        increase={ this.increase.bind(this) }
                        decrease={ this.decrease.bind(this) }
                        loading={ popupLoading }
                        close={ closePopup }
                        selectedElement={ this.selectedElement }
                    />
                    <Divider />
                    { player.actions.map((action, index) => (
                        <ListItem
                            key={ index }
                            onClick={ (e) => this.clickAction(e, action, openActionPopup) }
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