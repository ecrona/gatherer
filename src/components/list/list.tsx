import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'

import ViewTabs from './view-tabs'
import Table from './tables/table'
import GatherModal from './gather-modal'

import { Resolver } from 'utilities/resolver'

import { setViewState } from './actions/set-view-state'
import { toggleGatherModal } from './actions/toggle-gather-modal'
import { setHomeTeam, setAwayTeam, setPrimaryPlayer, setSecondaryPlayer } from './actions/set-gather-property'
import { fetchAll, fetchMatches, fetchEvents } from './actions/fetch-reports'
import { submitGather } from './actions/submit-gather'
import { push } from 'react-router-redux'

import { ViewState } from './models/view-state'
import { GatherForm } from 'models/gather-form.d'

const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '764px'
};

interface Props {
    dispatch: (any) => void;
    viewState: ViewState;
    showGatherModal: boolean;
    gatherModel: GatherForm;
    fetching: boolean;
}

class List extends React.Component<Props, any> {
    private resolver: Resolver;
    public tabs = [{
        title: 'All',
        viewState: ViewState.All,
    }, {
        title: 'Matches',
        viewState: ViewState.Matches,
    }, {
        title: 'Unsorted',
        viewState: ViewState.Unsorted,
    }];

    constructor(props: Props) {
        super(props);
    }

    private fetchReports(viewState: ViewState) {
        const { dispatch } = this.props;
        this.resolver = new Resolver;

        switch(viewState) {
            case ViewState.All:
                return dispatch(fetchAll(this.resolver));
            case ViewState.Matches:
                return dispatch(fetchMatches(this.resolver));
            case ViewState.Unsorted:
                return dispatch(fetchEvents(this.resolver));
        }
    }

    public componentDidMount() {
        this.fetchReports(this.props.viewState);
    }

    public componentWillReceiveProps(props) {
        if (this.props.viewState !== props.viewState) {
            this.resolver.resolve();
            this.fetchReports(props.viewState);
        }

        this.props = props;
    }

    public componentWillUnmount() {
        this.resolver.resolve();
    }

    public setViewState(viewState: ViewState) {
        this.props.dispatch(setViewState(viewState));
    }

    public openGatherModal() {
        this.props.dispatch(toggleGatherModal(true));
    }

    public closeGatherModal() {
        this.props.dispatch(toggleGatherModal(false));
    }

    public submitGather() {
        this.resolver = new Resolver;
        this.props.dispatch(submitGather(this.props.gatherModel, this.resolver));
    }

    public gatherModelValid(): boolean {
        return this.props.gatherModel.homeTeam.length > 0
            && this.props.gatherModel.awayTeam.length > 0
            && this.props.gatherModel.primaryPlayer.length > 0;
    }
    
    public render() {
        const {
            dispatch,
            viewState,
            showGatherModal,
            gatherModel,
            fetching
        } = this.props;

        return (
            <div>
                <AppBar
                    style={{ marginBottom: '24px' }}
                    title="Gatherer"
                    showMenuIconButton={ false }
                    iconElementRight={
                        <FlatButton
                            onClick={ this.openGatherModal.bind(this) }
                            label="Gather"
                        />
                    }
                />
                <Paper style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <ViewTabs
                        setViewState={ this.setViewState.bind(this) }
                        tabs={ this.tabs }
                        viewState={ viewState }
                    />
                    { fetching ?
                        <div style={{ textAlign: 'center', padding: '10px' }}>
                            <CircularProgress />
                        </div>
                    :
                        <Table />
                    }
                </Paper>
                <GatherModal
                    open={ showGatherModal }
                    submit={ this.submitGather.bind(this) }
                    close={ this.closeGatherModal.bind(this) }
                    setHomeTeam={ (homeTeam: string) => dispatch(setHomeTeam(homeTeam)) }
                    setAwayTeam={ (awayTeam: string) => dispatch(setAwayTeam(awayTeam)) }
                    setPrimaryPlayer={ (primaryPlayer: string) => dispatch(setPrimaryPlayer(primaryPlayer)) }
                    setSecondaryPlayer={ (secondaryPlayer: string) => dispatch(setSecondaryPlayer(secondaryPlayer)) }
                    homeTeam={ gatherModel.homeTeam }
                    awayTeam={ gatherModel.awayTeam }
                    primaryPlayer={ gatherModel.primaryPlayer }
                    secondaryPlayer={ gatherModel.secondaryPlayer }
                    valid={ this.gatherModelValid() }
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    viewState: state.list.viewState,
    showGatherModal: state.list.showGatherModal,
    gatherModel: state.list.gatherModel,
    fetching: state.list.fetching
});

export default connect(mapStateToProps)(List);