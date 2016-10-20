import * as React from 'react'
import { connect } from 'react-redux'
import { Resolver } from 'utilities/resolver'

import {
    Toolbar as MuiToolbar,
    ToolbarGroup,
    ToolbarSeparator,
    ToolbarTitle
} from 'material-ui/Toolbar'

import RaisedButton from 'material-ui/RaisedButton'
import AvPause from 'material-ui/svg-icons/av/pause'
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow'
import Sync from 'material-ui/svg-icons/notification/sync'

import { setTime, setStatus, setHalf } from './actions/status'

import { Status } from './models/status'
import { Half } from './models/half'

interface Props {
    dispatch: (any) => void;
    fetching: boolean;
    time: string;
    status: Status;
    half: Half;
}

class Toolbar extends React.Component<Props, any> {
    private interval;
    private startTime;
    private elapsedTime;
    private rest = 0;

    constructor(props: Props) {
        super(props);
    }

    private request() {
        this.elapsedTime = new Date();
        let diff = this.elapsedTime - this.startTime;

        // More than a second has passed
        if (diff > 1000) {
            diff += this.rest;

            const minutes = Math.floor(diff / 1000 / 60);
            const seconds = Math.floor(diff / 1000) - (minutes * 60);
            const zeroSecond = seconds > 9 ? '' : '0';
            const zeroMinute = minutes > 9 ? '' : '0';

            this.props.dispatch(setTime(
                (zeroMinute + minutes) + ':' + (zeroSecond + seconds)
            ));
        }

        this.interval = requestAnimationFrame(this.request.bind(this));
    }

    public getStatusIcon() {
        if (this.props.status === Status.Paused) {
            return <AvPlayArrow style={{ margin: '6px' }} />
        } else if (this.props.status === Status.Playing) {
            return <AvPause style={{ margin: '6px' }} />
        }
    }

    public toggleStatus() {
        if (this.props.status === Status.Paused) {
            this.props.dispatch(setStatus(Status.Playing));
            this.startTime = new Date();
            this.interval = requestAnimationFrame(this.request.bind(this));
        } else {
            cancelAnimationFrame(this.interval);
            this.rest += Math.floor((this.elapsedTime - this.startTime) / 1000) * 1000;
            this.props.dispatch(setStatus(Status.Paused));
        }
    }

    public render() {
        const {
            fetching,
            time,
            status
        } = this.props;

        return (
            <MuiToolbar>
                <ToolbarGroup firstChild={ true }>
                    <RaisedButton
                        disabled={ fetching }
                        icon={ this.getStatusIcon() }
                        primary={ true }
                        onClick={ this.toggleStatus.bind(this) }
                    />
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle text={ time } />
                </ToolbarGroup>
                <ToolbarGroup lastChild={ true }>
                    <RaisedButton
                        disabled={ fetching }
                        icon={ <Sync style={{ margin: '6px' }} /> }
                        secondary={ true} 
                    />
                </ToolbarGroup>
            </MuiToolbar>
        );
    }
}

const mapStateToProps = state => ({
    fetching: state.gather.data.fetching,
    time: state.gather.time,
    status: state.gather.status,
    half: state.gather.half
});

export default connect(mapStateToProps)(Toolbar);