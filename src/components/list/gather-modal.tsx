import * as React from 'react'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';

interface Props {
    open: boolean;
    close: () => void;
    setHomeTeam: (homeTeam: string) => void;
    setAwayTeam: (awayTeam: string) => void;
    setPrimaryPlayer: (primaryPlayer: string) => void;
    setSecondaryPlayer: (secondaryPlayer: string) => void;
    homeTeam: string;
    awayTeam: string;
    primaryPlayer: string;
    secondaryPlayer: string;
    valid: boolean;
}

export class GatherModal extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={ true }
                onClick={ this.props.close }
            />,
            <FlatButton
                label="Submit"
                primary={ true }
                keyboardFocused={ true }
                onClick={ this.props.close }
                disabled={ !this.props.valid }
            />,
        ];

        return (
            <Dialog
                title="New Gather"
                actions={ actions }
                modal={ false }
                open={ this.props.open }
                onRequestClose={ this.props.close }
            >
                <div>
                    <AutoComplete
                        floatingLabelText="Home Team *"
                        filter={ AutoComplete.noFilter }
                        dataSource={ ['Empoli'] }
                        searchText={ this.props.homeTeam }
                        onUpdateInput={ this.props.setHomeTeam }
                    />
                    <AutoComplete
                        floatingLabelText="Away Team *"
                        filter={ AutoComplete.noFilter }
                        dataSource={ ['Genoa'] }
                        style={{ marginLeft: '20px' }}
                        searchText={ this.props.awayTeam }
                        onUpdateInput={ this.props.setAwayTeam }
                    />
                </div>
                <div>
                    <AutoComplete
                        floatingLabelText="Primary Player *"
                        filter={ AutoComplete.noFilter }
                        dataSource={ ['Manuel Pasqual'] }
                        searchText={ this.props.primaryPlayer }
                        onUpdateInput={ this.props.setPrimaryPlayer }
                    />
                </div>
                <div>
                    <AutoComplete
                        floatingLabelText="Secondary Player"
                        filter={ AutoComplete.noFilter }
                        dataSource={ ['Mattia Perin'] }
                        searchText={ this.props.secondaryPlayer }
                        onUpdateInput={ this.props.setSecondaryPlayer }
                    />
                </div>
            </Dialog>
        );
    }
}