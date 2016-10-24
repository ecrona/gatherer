import * as React from 'react'
import { connect } from 'react-redux'
import { Resolver } from 'utilities/resolver'

import CircularProgress from 'material-ui/CircularProgress'
import { PlayerCard } from '../../player-card/player-card'

import { Player } from 'models/player'
import { Action } from 'models/action'

import {
    openPrimaryPlayerOverall,
    openSecondaryPlayerOverall,
    openPrimaryPlayerAction,
    openSecondaryPlayerAction,
    close
} from '../actions/popups'

import {
    increasePrimaryPlayerOverall,
    decreasePrimaryPlayerOverall,
    increaseSecondaryPlayerOverall,
    decreaseSecondaryPlayerOverall,
    increasePrimaryPlayerAction,
    decreasePrimaryPlayerAction,
    increaseSecondaryPlayerAction,
    decreaseSecondaryPlayerAction
} from '../actions/gather'

const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '764px'
};

interface Props {
    dispatch: (any) => void;
    primaryPlayer: Player;
    secondaryPlayer: Player;
    primaryPlayerOverallPopup: boolean;
    secondaryPlayerOverallPopup: boolean;
    primaryPlayerActionPopup: boolean;
    secondaryPlayerActionPopup: boolean;
    popupLoading: boolean;
}

class PlayerPanel extends React.Component<Props, any> {
    private resolver: Resolver;

    constructor(props: Props) {
        super(props);
    }

    public componentWillUnmount() {
        if (this.resolver) {
            this.resolver.resolve();
        }
    }

    public newResolver() {
        this.resolver = new Resolver;
        return this.resolver;
    }

    public closePopup() {
        if (!this.props.popupLoading) {
            this.props.dispatch(close());
        }
    }
    
    public render() {
        const {
            dispatch,
            primaryPlayer,
            secondaryPlayer,
            primaryPlayerOverallPopup,
            secondaryPlayerOverallPopup,
            primaryPlayerActionPopup,
            secondaryPlayerActionPopup,
            popupLoading
        } = this.props;

        console.log(this.props)

        return (
            <div style={{ display: 'flex', padding: '10px 5px 10px 15px' }}>
                <PlayerCard
                    player={ secondaryPlayer }
                    showOverallPopup={ secondaryPlayerOverallPopup }
                    openOverallPopup={ () => dispatch(openSecondaryPlayerOverall()) }
                    showActionPopup={ secondaryPlayerActionPopup }
                    openActionPopup={ () => dispatch(openSecondaryPlayerAction()) }
                    increaseOverall={ () => dispatch(increaseSecondaryPlayerOverall(this.newResolver())) }
                    decreaseOverall={ () => dispatch(decreaseSecondaryPlayerOverall(this.newResolver())) }
                    increaseAction={ (action: Action) => dispatch(increaseSecondaryPlayerAction(action, this.newResolver())) }
                    decreaseAction={ (action: Action) => dispatch(decreaseSecondaryPlayerAction(action, this.newResolver())) }
                    popupLoading={ popupLoading }
                    closePopup={ () => dispatch(close()) }
                />
                <div style={{ padding: '5px' }} />
                <PlayerCard
                    player={ primaryPlayer }
                    showOverallPopup={ primaryPlayerOverallPopup }
                    openOverallPopup={ () => dispatch(openPrimaryPlayerOverall()) }
                    showActionPopup={ primaryPlayerActionPopup }
                    openActionPopup={ () => dispatch(openPrimaryPlayerAction()) }
                    increaseOverall={ () => dispatch(increasePrimaryPlayerOverall(this.newResolver())) }
                    decreaseOverall={ () => dispatch(decreasePrimaryPlayerOverall(this.newResolver())) }
                    increaseAction={ (action: Action) => dispatch(increasePrimaryPlayerAction(action, this.newResolver())) }
                    decreaseAction={ (action: Action) => dispatch(decreasePrimaryPlayerAction(action, this.newResolver())) }
                    popupLoading={ popupLoading }
                    closePopup={ this.closePopup.bind(this) }
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    primaryPlayer: state.gather.data.primaryPlayer,
    secondaryPlayer: state.gather.data.secondaryPlayer,
    primaryPlayerOverallPopup: state.gather.popups.primaryPlayerOverall,
    secondaryPlayerOverallPopup: state.gather.popups.secondaryPlayerOverall,
    primaryPlayerActionPopup: state.gather.popups.primaryPlayerAction,
    secondaryPlayerActionPopup: state.gather.popups.secondaryPlayerAction,
    popupLoading: state.gather.popups.loading
});

export default connect(mapStateToProps)(PlayerPanel);