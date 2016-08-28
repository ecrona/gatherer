import * as React from 'react'
import { Event } from './models/event.d';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward'

interface Props {
    reports: Array<Event>;
}

export class UnsortedTable extends React.Component<Props, any> {
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
                        <TableHeaderColumn style={{ width: '30%' }}>Description</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={ false }>
                    { this.props.reports.map((reports, index) => (
                            <TableRow key={ index } selectable={ false }>
                                <TableRowColumn style={{ width: '20%' }}>{ reports.player }</TableRowColumn>
                                <TableRowColumn style={{ width: '30%' }}>{ reports.match }</TableRowColumn>
                                <TableRowColumn style={{ width: '20%' }}>{ reports.date }</TableRowColumn>
                                <TableRowColumn style={{ width: '30%' }}>{ reports.description }</TableRowColumn>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        );
    }
}