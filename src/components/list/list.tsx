import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AppBar from 'material-ui/AppBar'
import Subheader from 'material-ui/Subheader'
import FlatButton from 'material-ui/FlatButton'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import Slider from 'material-ui/Slider'
import Paper from 'material-ui/Paper'
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';

import { TabItem } from './models/tab-item.d';
import { TabsComponent } from './tabs';

import { setViewState } from './actions/set-view-state'
import { ViewState } from './models/view-state'

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

    public setViewState(viewState: ViewState) {
        this.props.dispatch(setViewState(viewState));
    }
    
    public render() {
        const { viewState } = this.props;

        return (
            <div>
                <AppBar
                    style={{ marginBottom: '24px' }}
                    title="Gatherer"
                    showMenuIconButton={ false }
                    iconElementRight={ <FlatButton label="Gather" /> }
                />
                <Paper style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <TabsComponent
                        setViewState={ this.setViewState.bind(this) }
                        tabs={ this.tabs }
                        viewState={ viewState }
                    />
                    <Table>
                        <TableHeader displaySelectAll={ false } adjustForCheckbox={ false }>
                            <TableRow>
                                <TableHeaderColumn style={{ width: '20%' }}>Player</TableHeaderColumn>
                                <TableHeaderColumn style={{ width: '30%' }}>Match</TableHeaderColumn>
                                <TableHeaderColumn style={{ width: '20%' }}>Date</TableHeaderColumn>
                                <TableHeaderColumn style={{ width: '15%' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <ArrowDownward style={{ color: 'default' }}/>Overall
                                    </div>
                                </TableHeaderColumn>
                                <TableHeaderColumn style={{ width: '15%' }}>Actions</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={ false }>
                            <TableRow selectable={ false }>
                                <TableRowColumn style={{ width: '20%' }}>Giorgio Chiellini</TableRowColumn>
                                <TableRowColumn style={{ width: '30%' }}>Juventus - Borussia Mönchenglabach</TableRowColumn>
                                <TableRowColumn style={{ width: '20%' }}>2015-01-03</TableRowColumn>
                                <TableRowColumn style={{ width: '15%' }}>8</TableRowColumn>
                                <TableRowColumn style={{ width: '15%' }}>16</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  viewState: state.list.viewState
});

export default connect(mapStateToProps)(List);