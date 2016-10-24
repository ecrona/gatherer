import * as React from 'react'
import { connect } from 'react-redux'
import { Resolver } from 'utilities/resolver'

import CircularProgress from 'material-ui/CircularProgress'
import { PlayerCard } from '../player-card/player-card'

import { Player } from 'models/player'
import { Action } from 'models/action'

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
}

class PlayerPanel extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }
    
    public render() {
        const {
            dispatch,
            primaryPlayer,
            secondaryPlayer
        } = this.props;

        console.log(this.props)

        return (
            <div style={{ display: 'flex', padding: '10px 5px 10px 15px' }}>
                <PlayerCard
                    player={ secondaryPlayer }
                    viewOnly={ true }
                />
                <div style={{ padding: '5px' }} />
                <PlayerCard
                    player={ primaryPlayer }
                    viewOnly={ true }
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    primaryPlayer: state.report.gather.primaryPlayer,
    secondaryPlayer: state.report.gather.secondaryPlayer
});

export default connect(mapStateToProps)(PlayerPanel);