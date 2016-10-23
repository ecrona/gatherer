import * as React from 'react'
import { connect } from 'react-redux'
import { Resolver } from 'utilities/resolver'

import {
    Toolbar as MuiToolbar,
    ToolbarGroup,
    ToolbarSeparator,
    ToolbarTitle
} from 'material-ui/Toolbar'

import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import AvPause from 'material-ui/svg-icons/av/pause'
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow'
import Sync from 'material-ui/svg-icons/notification/sync'
import Star from 'material-ui/svg-icons/toggle/star'
import StarHalf from 'material-ui/svg-icons/toggle/star-half'

import SynchronizeModal from './synchronize-modal'

import { setTime, setStatus, setHalf } from './actions/status'
import { toggleActive } from './actions/synchronize-modal'

import { Status } from './models/status'
import { Half } from './models/half'


interface Props {
    dispatch: (any) => void;
    fetching: boolean;
    time: string;
    status: Status;
    half: Half;
    showSynchronizeModal: boolean;
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

    public getHalfIcon() {
        if (this.props.half === Half.First) {
            return <StarHalf style={{ margin: '6px' }} />
        } else if (this.props.half === Half.Second) {
            return <Star style={{ margin: '6px' }} />
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

    public toggleHalf() {
        const half = this.props.half === Half.First ? Half.Second : Half.First;
        cancelAnimationFrame(this.interval);
        this.props.dispatch(setHalf(half));
        
        if (half === Half.First) {
            this.rest = 0;
        } else if (half === Half.Second) {
            this.rest = 2700000; // 45 minutes
        }
    }

    public render() {
        const {
            dispatch,
            fetching,
            time
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
                    <RaisedButton
                        style={{ marginLeft: 0, marginRight: 0 }}
                        disabled={ fetching }
                        icon={ this.getHalfIcon() }
                        primary={ true }
                        onClick={ this.toggleHalf.bind(this) }
                    />
                </ToolbarGroup>
                <ToolbarGroup style={{ marginRight: '88px' }}>
                    <ToolbarTitle
                        style={{ padding: 0 }}
                        text={ time }
                    />
                </ToolbarGroup>
                <ToolbarGroup lastChild={ true }>
                    <RaisedButton
                        disabled={ fetching }
                        icon={ <Sync style={{ margin: '6px' }} /> }
                        secondary={ true }
                        onClick={ () => dispatch(toggleActive(true)) }
                    />
                    <SynchronizeModal />
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