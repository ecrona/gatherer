import * as React from 'react'
import { connect } from 'react-redux'
import { Resolver } from 'utilities/resolver'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'

import Toolbar from './toolbar'
import PlayerPanel from './player-panel/player-panel'

import { fetchGather } from './actions/gather'

const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '764px'
};

interface Props {
    dispatch: (any) => void;
    fetching: boolean;
}

class Gather extends React.Component<Props, any> {
    private resolver: Resolver;

    constructor(props: Props) {
        super(props);
    }

    public componentDidMount() {
        this.resolver = new Resolver;
        this.props.dispatch(fetchGather(3, this.resolver));
    }
    
    public render() {
        const { fetching } = this.props;

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
                    <Toolbar frozen={ fetching } />
                    { fetching ?
                        <div style={{ textAlign: 'center', padding: '10px' }}>
                            <CircularProgress />
                        </div>
                    :            
                        <PlayerPanel />
                    }
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    fetching: state.gather.data.fetching
});

export default connect(mapStateToProps)(Gather);