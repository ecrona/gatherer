import * as React from 'react'
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'

import RaisedButton from 'material-ui/RaisedButton'

import { Toolbar } from './toolbar'
import { PlayerCard } from './player-card'

import { openPrimaryPlayerOverall, close } from './actions/popups'

const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '764px'
};

interface Props {
    dispatch: (any) => void;
    primaryPlayerOverallPopup: boolean;
    secondaryPlayerOverallPopup: boolean;
    primaryPlayerActionPopup: boolean;
    secondaryPlayerActionPopup: boolean;
}

class Gather extends React.Component<Props, any> {
    //private resolver: Resolver;

    constructor(props: Props) {
        super(props);
    }
    
    public render() {
        const {
            dispatch,
            primaryPlayerOverallPopup
        } = this.props;

        console.log(this.props)

        const player = {
            name: 'Andrea Barzaglif',
            overall: 7,
            actions: [{
                featured: true,
                description: 'Tackles',
                amount: 6
            },{
                featured: false,
                description: 'Test',
                amount: 8
            },{
                featured: true,
                description: 'Passes',
                amount: 3
            }]
        };

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
                <Toolbar />
                    { false ?
                        <div style={{ textAlign: 'center', padding: '10px' }}>
                            <CircularProgress />
                        </div>
                    :
                        <div style={{ display: 'flex', padding: '10px' }}>
                            <PlayerCard
                                player={ player }
                                showOverallPopup={ primaryPlayerOverallPopup }
                                openOverallPopup={ () => dispatch(openPrimaryPlayerOverall()) }
                                closePopup={ () => dispatch(close()) }
                            />
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
    primaryPlayerOverallPopup: state.gather.popups.primaryPlayerOverall,
    secondaryPlayerOverallPopup: state.gather.popups.secondaryPlayerOverall,
    primaryPlayerActionPopup: state.gather.popups.primaryPlayerAction,
    secondaryPlayerActionPopup: state.gather.popups.secondaryPlayerAction
});

export default connect(mapStateToProps)(Gather);