import * as React from 'react'
import { FullReport } from './models/full-report.d';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward'

interface Props {
    reports: Array<FullReport>;
}

export class AllTable extends React.Component<Props, any> {
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
                        <TableHeaderColumn style={{ width: '10%' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <ArrowDownward style={{ color: 'default' }}/>Actions
                            </div>
                        </TableHeaderColumn>
                        <TableHeaderColumn style={{ width: '20%' }}>Actions</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={ false }>
                    { this.props.reports.map((report, index) => (
                            <TableRow key={ index } selectable={ false }>
                                <TableRowColumn style={{ width: '20%' }}>{ report.player }</TableRowColumn>
                                <TableRowColumn style={{ width: '30%' }}>{ report.match }</TableRowColumn>
                                <TableRowColumn style={{ width: '20%' }}>{ report.date }</TableRowColumn>
                                <TableRowColumn style={{ width: '10%' }}>{ report.actions }</TableRowColumn>
                                <TableRowColumn style={{ width: '20%' }}>{ report.description }</TableRowColumn>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        );
    }
}