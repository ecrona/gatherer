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
    params: {
        id: string
    };
}

class Gather extends React.Component<Props, any> {
    private resolver: Resolver;

    constructor(props: Props) {
        super(props);
    }

    private fetchGather(id: number) {
        this.resolver = new Resolver;
        this.props.dispatch(fetchGather(id, this.resolver));
    }

    public componentDidMount() {
        this.fetchGather(Number(this.props.params.id));
    }

    public componentWillReceiveProps(props: Props) {
        if (props.params.id !== this.props.params.id) {
            this.fetchGather(Number(props.params.id));
        }

        this.props = props;
    }

    public componentWillUnmount() {
        this.resolver.resolve();
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