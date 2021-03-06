import * as React from 'react'
import { connect } from 'react-redux'
import { Resolver } from 'utilities/resolver'
import { push } from 'react-router-redux'

import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'

import ViewTabs from './view-tabs'
import AppBar from './app-bar'
import PlayerPanel from './player-panel'
import IncrementalPanel from './incremental-panel'

import { fetchGather } from './actions/gather'
import { setViewState } from './actions/set-view-state'

import { ViewState } from './models/view-state'

const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '764px'
};

interface Props {
    dispatch: (any) => void;
    fetching: boolean;
    viewState: ViewState;
    params: {
        id: string
    };
}

class Report extends React.Component<Props, any> {
    private resolver: Resolver;
    public tabs = [{
        title: 'Statistical',
        viewState: ViewState.Statistical,
    }, {
        title: 'Incremental',
        viewState: ViewState.Incremental,
    }];

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
            this.resolver.resolve();
            this.fetchGather(Number(props.params.id));
        }

        this.props = props;
    }

    public componentWillUnmount() {
        this.resolver.resolve();
    }

    public setViewState(viewState: ViewState) {
        this.props.dispatch(setViewState(viewState));
    }

    public gotoList() {
        this.props.dispatch(push('/list'));
    }

    public gotoGather() {
        this.props.dispatch(push('/gather/' + this.props.params.id));
    }

    public render() {
        const { fetching, viewState } = this.props;

        return (
            <div>
                <AppBar
                    frozen={ fetching }
                    close={ this.gotoList.bind(this) }
                    modify={ this.gotoGather.bind(this) }
                />
                <Paper style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <ViewTabs
                        frozen={ fetching }
                        setViewState={ this.setViewState.bind(this) }
                        tabs={ this.tabs }
                        viewState={ viewState }
                    />
                    { fetching ?
                        <div style={{ textAlign: 'center', padding: '10px' }}>
                            <CircularProgress />
                        </div>
                    :
                        <div>
                            { viewState === ViewState.Statistical ?
                                <PlayerPanel />
                            :
                                <IncrementalPanel />
                            }
                        </div>
                    }
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    fetching: state.report.gather.fetching,
    viewState: state.report.viewState
});

export default connect(mapStateToProps)(Report);