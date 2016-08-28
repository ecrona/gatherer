import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'

import { ViewTabs } from './view-tabs';
import { MatchTable } from './match-table';

import { ViewState } from './models/view-state'
import { setViewState } from './actions/set-view-state'
import { fetchReports } from './actions/fetch-reports'

const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '764px'
};

class List extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        console.log(props)
    }

    public tabs = [{
        title: 'Reports',
        viewState: ViewState.Reports,
    }, {
        title: 'Something',
        viewState: ViewState.Something,
    }, {
        title: 'Unsorted',
        viewState: ViewState.Unsorted,
    }];

    public componentDidMount() {
        this.props.dispatch(fetchReports());
    }

    public setViewState(viewState: ViewState) {
        this.props.dispatch(setViewState(viewState));
    }
    
    public render() {
        const { viewState, matches, fetching } = this.props;

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
                    <MatchTable
                        loading={ fetching }
                        matches={ matches }
                    />
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  viewState: state.list.viewState,
  fetching: state.list.fetching,
  matches: state.list.matches
});

export default connect(mapStateToProps)(List);