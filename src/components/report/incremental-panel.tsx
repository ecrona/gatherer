import * as React from 'react'
import { connect } from 'react-redux'
import { Resolver } from 'utilities/resolver'

import CircularProgress from 'material-ui/CircularProgress'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import { PlayerCard } from '../player-card/player-card'

import { Player } from 'models/player'
import { Action } from 'models/action'

const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '764px'
};

interface Props {
    dispatch: (any) => void;
    incremental: Array<Array<string>>;
}

class IncrementalPanel extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const {
            dispatch,
            incremental
        } = this.props;

        const align = { textAlign: 'center' };
        const alignLeft = { textAlign: 'left' };
        const alignRight = { textAlign: 'right' };

        console.log(this.props)

        return (
            <Table selectable={ false } bodyStyle={{ maxWidth: '800px', margin: '0 auto' }}>
                <TableHeader displaySelectAll={ false } adjustForCheckbox={ false }>
                    <TableRow >
                        <TableHeaderColumn style={ align }>Andrea Barzagli</TableHeaderColumn>
                        <TableHeaderColumn style={ align }>Giorgio Chiellini</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={ false }>
                    { incremental.map((row, index) => (                        
                        <TableRow key={ index } displayBorder={ false }>
                            <TableRowColumn style={ align }>{ row[0] }</TableRowColumn>
                            <TableRowColumn style={ align }>{ row[1] }'</TableRowColumn>
                            <TableRowColumn style={ align }>{ row[2] }</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}

const mapStateToProps = state => ({
    incremental: state.report.gather.incremental,
});

export default connect(mapStateToProps)(IncrementalPanel);