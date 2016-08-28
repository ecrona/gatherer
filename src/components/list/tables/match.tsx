import * as React from 'react'
import { Match } from './models/match.d';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward'

interface Props {
    reports: Array<Match>;
}

export class MatchTable extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }
    
    public render() {
        return (
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
                    { this.props.reports.map((report, index) => (
                            <TableRow key={ index } selectable={ false }>
                                <TableRowColumn style={{ width: '20%' }}>{ report.player }</TableRowColumn>
                                <TableRowColumn style={{ width: '30%' }}>{ report.match }</TableRowColumn>
                                <TableRowColumn style={{ width: '20%' }}>{ report.date }</TableRowColumn>
                                <TableRowColumn style={{ width: '15%' }}>{ report.overall }</TableRowColumn>
                                <TableRowColumn style={{ width: '15%' }}>{ report.actions }</TableRowColumn>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        );
    }
}