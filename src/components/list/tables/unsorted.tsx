import * as React from 'react'
import { Report } from '../models/report.d'
import { Event } from '../models/event.d';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward'
import ClickableTableRow from 'components/clickable-table-row'

interface Props {
    reports: Array<Event>;
    clickReport: (report: Report) => void;
}

export class UnsortedTable extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }
    
    public render() {
        const { reports, clickReport } = this.props;

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
                <TableBody displayRowCheckbox={ false } showRowHover={ true }>
                    { this.props.reports.map((report, index) => (
                            <ClickableTableRow onClick={ () => clickReport(report) } key={ index } selectable={ false }>
                                <TableRowColumn style={{ width: '20%' }}>{ report.player }</TableRowColumn>
                                <TableRowColumn style={{ width: '30%' }}>{ report.match }</TableRowColumn>
                                <TableRowColumn style={{ width: '20%' }}>{ report.date }</TableRowColumn>
                                <TableRowColumn style={{ width: '30%' }}>{ report.description }</TableRowColumn>
                            </ClickableTableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}