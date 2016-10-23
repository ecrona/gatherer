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
    active: boolean;
    half: Half;
    minutes: string;
    seconds: string;
}

class SynchronizeModal extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
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

    private getTime(time: string) {
        if (time.length > 2) {
            time = time[0] + time[2];
        }

        return time;
    }

    public setMinutes(e) {
        const value = this.getTime(e.target.value);
        this.props.dispatch(setMinutes(value));
    }

    public setSeconds(e) {
        const value = this.getTime(e.target.value);
        this.props.dispatch(setSeconds(value));
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
                        onChange={ this.setMinutes.bind(this) }
                    />
                    :
                    <TimeField
                        id="seconds"
                        value={ seconds }
                        onChange={ this.setSeconds.bind(this) }
                    />
                </div>
            </Dialog>
        );
    }
}

const mapStateToProps = state => ({
    active: state.gather.synchronizeModal.active,
    half: state.gather.synchronizeModal.half,
    minutes: state.gather.synchronizeModal.minutes,
    seconds: state.gather.synchronizeModal.seconds
});

export default connect(mapStateToProps)(SynchronizeModal);