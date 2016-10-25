import * as React from 'react'
import { connect } from 'react-redux'

import { AllTable } from './all';
import { MatchTable } from './match';
import { UnsortedTable } from './unsorted';

import { push } from 'react-router-redux'

import { ViewState } from '../models/view-state'
import { FullReport } from '../models/full-report.d'
import { Match } from '../models/match.d'
import { Event } from '../models/event.d'


interface Props {
    dispatch: (any) => void;
    viewState: ViewState;
    all: Array<FullReport>;
    matches: Array<Match>;
    unsorted: Array<Event>;
}

class Table extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    public gotoReport(report: FullReport) {
        this.props.dispatch(push('/report/' + report.id));
    }
    
    public render() {
        const {
            viewState,
            all,
            matches,
            unsorted,
        } = this.props;

        return (
            <div>
                { viewState === ViewState.All ?
                    <AllTable
                        reports={ all }
                        clickReport={ this.gotoReport.bind(this) }
                    />
                : viewState === ViewState.Matches ?
                    <MatchTable
                        reports={ matches }
                        clickReport={ this.gotoReport.bind(this) }
                    />
                :
                    <UnsortedTable
                        reports={ unsorted }
                        clickReport={ this.gotoReport.bind(this) }
                    />
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    viewState: state.list.viewState,
    all: state.list.all,
    matches: state.list.matches,
    unsorted: state.list.unsorted
});

export default connect(mapStateToProps)(Table);