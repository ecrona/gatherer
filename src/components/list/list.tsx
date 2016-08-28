import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'

import { ViewTabs } from './view-tabs';
import { AllTable } from './tables/all';
import { MatchTable } from './tables/match';
import { UnsortedTable } from './tables/unsorted';

import { Resolver } from 'utilities/resolver';

import { setViewState } from './actions/set-view-state'
import { fetchAll, fetchMatches, fetchEvents } from './actions/fetch-reports'

import { ViewState } from './models/view-state'
import { FullReport } from './models/full-report.d'
import { Match } from './models/match.d'
import { Event } from './models/event.d'

const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '764px'
};

interface Props {
    dispatch: (any) => void;
    viewState: ViewState;
    fetching: boolean;
    all: Array<FullReport>;
    matches: Array<Match>;
    unsorted: Array<Event>;
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

    public setViewState(viewState: ViewState) {
        this.props.dispatch(setViewState(viewState));
    }
    
    public render() {
        const { viewState, all, matches, unsorted, fetching } = this.props;

        return (
            <div>
                <AppBar
                    style={{ marginBottom: '24px' }}
                    title="Gatherer"
                    showMenuIconButton={ false }
                    iconElementRight={ <FlatButton label="Gather" /> }
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
                        viewState === ViewState.All ?
                            <AllTable reports={ all } />
                        : viewState === ViewState.Matches ?
                            <MatchTable reports={ matches } />
                        :
                            <UnsortedTable reports={ unsorted } />
                    }
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  viewState: state.list.viewState,
  fetching: state.list.fetching,
  all: state.list.all,
  matches: state.list.matches,
  unsorted: state.list.unsorted
});

export default connect(mapStateToProps)(List);