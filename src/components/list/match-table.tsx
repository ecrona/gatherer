import * as React from 'react'
import { Match } from './models/match.d';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward'
import CircularProgress from 'material-ui/CircularProgress'

interface Props {
    loading: boolean;
    matches: Array<Match>;
}

export class MatchTable extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }
    
    public render() {
        return (
            <div>
                { this.props.loading ?
                    <div style={{ textAlign: 'center', padding: '10px' }}>
                        <CircularProgress />
                    </div>
                :
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
                            { this.props.matches.map((match, index) => (
                                    <TableRow key={ index } selectable={ false }>
                                        <TableRowColumn style={{ width: '20%' }}>{ match.player }</TableRowColumn>
                                        <TableRowColumn style={{ width: '30%' }}>{ match.match }</TableRowColumn>
                                        <TableRowColumn style={{ width: '20%' }}>{ match.date }</TableRowColumn>
                                        <TableRowColumn style={{ width: '15%' }}>{ match.overall }</TableRowColumn>
                                        <TableRowColumn style={{ width: '15%' }}>{ match.actions }</TableRowColumn>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                }
            </div>
        );
    }
}