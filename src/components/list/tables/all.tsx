import * as React from 'react'
import { Report } from './models/report.d'
import { FullReport } from './models/full-report.d'

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward'
import ClickableTableRow from 'components/clickable-table-row'

interface Props {
    reports: Array<FullReport>;
    clickReport: (report: Report) => void;
}

export class AllTable extends React.Component<Props, any> {
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
                        <TableHeaderColumn style={{ width: '10%' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <ArrowDownward style={{ color: 'default' }}/>Actions
                            </div>
                        </TableHeaderColumn>
                        <TableHeaderColumn style={{ width: '20%' }}>Actions</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={ false } showRowHover={ true }>
                    { reports.map((report, index) => (
                        <ClickableTableRow onClick={ () => clickReport(report) } key={ index } selectable={ false }>
                            <TableRowColumn style={{ width: '20%' }}>{ report.player }</TableRowColumn>
                            <TableRowColumn style={{ width: '30%' }}>{ report.match }</TableRowColumn>
                            <TableRowColumn style={{ width: '20%' }}>{ report.date }</TableRowColumn>
                            <TableRowColumn style={{ width: '10%' }}>{ report.actions }</TableRowColumn>
                            <TableRowColumn style={{ width: '20%' }}>{ report.description }</TableRowColumn>
                        </ClickableTableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}