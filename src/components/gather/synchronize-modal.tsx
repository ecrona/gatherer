import * as React from 'react'
import { connect } from 'react-redux'

import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Star from 'material-ui/svg-icons/toggle/star'
import StarHalf from 'material-ui/svg-icons/toggle/star-half'
import { TimeField } from './time-field'

import { toggleActive, setHalf, setMinutes, setSeconds, synchronize } from './actions/synchronize-modal'

import { Half } from './models/half'


interface Props {
    dispatch: (any) => void;
    time: string;
    toolbarHalf: Half;
    active: boolean;
    half: Half;
    minutes: string;
    seconds: string;
}

class SynchronizeModal extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    public componentWillReceiveProps(props: Props) {
        // The modal goes from being closed to being opened
        if (this.props.active === false && props.active === true) {
            const [ minutes, seconds ] = this.props.time.split(':');

            this.setMinutes(minutes);
            this.setSeconds(seconds);
            this.props.dispatch(setHalf(props.toolbarHalf));
        }
        
        this.props = props;
    }

    private getTime(time: string) {
        if (time.length > 2) {
            time = time[0] + time[2];
        }

        return time;
    }

    public getHalfIcon() {
        if (this.props.half === Half.First) {
            return <StarHalf style={{ margin: '6px' }} />
        } else if (this.props.half === Half.Second) {
            return <Star style={{ margin: '6px' }} />
        }
    }

    public toggleHalf() {
        const half = this.props.half === Half.First ? Half.Second : Half.First;
        this.props.dispatch(setHalf(half));
    }

    public setMinutes(minutes: string) {
        this.props.dispatch(setMinutes(this.getTime(minutes)));
    }

    public setSeconds(seconds: string) {
        this.props.dispatch(setSeconds(this.getTime(seconds)));
    }

    public synchronize() {
        const { dispatch, minutes, seconds, half } = this.props;

        dispatch(synchronize(
            minutes,
            seconds,
            half
        ));
    }

    public render() {
        const {
            dispatch,
            active,
            minutes,
            seconds
        } = this.props;

        return (
            <Dialog
                title="Synchronize time"
                actions={[
                    <RaisedButton
                        label="Set"
                        onClick={ this.synchronize.bind(this) }
                    />
                ]}
                modal={ false }
                open={ active }
                onRequestClose={ () => dispatch(toggleActive(false)) }
            >
                <div>
                    <RaisedButton
                        style={{ marginRight: '10px' }}
                        icon={ this.getHalfIcon() }
                        primary={ true }
                        onClick={ this.toggleHalf.bind(this) }
                    />
                    <TimeField
                        id="minutes"
                        value={ minutes }
                        onChange={ (e) => this.setMinutes(e.target.value) }
                    />
                    :
                    <TimeField
                        id="seconds"
                        value={ seconds }
                        onChange={ (e) => this.setSeconds(e.target.value) }
                    />
                </div>
            </Dialog>
        );
    }
}

const mapStateToProps = state => ({
    time: state.gather.time,
    toolbarHalf: state.gather.half,
    active: state.gather.synchronizeModal.active,
    half: state.gather.synchronizeModal.half,
    minutes: state.gather.synchronizeModal.minutes,
    seconds: state.gather.synchronizeModal.seconds
});

export default connect(mapStateToProps)(SynchronizeModal);