import * as React from 'react'

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

interface Props {
    frozen: boolean;
}

export default class Toolbar extends React.Component<Props, any> {
    private temp = false;
    private interval;
    private startTime;
    private elapsedTime;
    private pot = 0;

    constructor(props: Props) {
        super(props);

        this.state = {
            time: '00:00'
        };
    }

    private request() {
        this.elapsedTime = new Date();
        let diff = this.elapsedTime - this.startTime;

        // More than a second has passed
        if (diff > 1000) {
            diff += this.pot;

            const minutes = Math.floor(diff / 1000 / 60);
            const seconds = Math.floor(diff / 1000) - (minutes * 60);
            const zeroSecond = seconds > 9 ? '' : '0';
            const zeroMinute = minutes > 9 ? '' : '0';

            this.setState({
                time: (zeroMinute + minutes) + ':' + (zeroSecond + seconds)
            });
        }

        this.interval = requestAnimationFrame(this.request.bind(this));
    }

    public toggleInterval() {
        this.temp = !this.temp;

        if (this.temp) {
            this.startTime = new Date();
            this.interval = requestAnimationFrame(this.request.bind(this));
        } else {
            cancelAnimationFrame(this.interval);
            this.pot += Math.floor((this.elapsedTime - this.startTime) / 1000) * 1000;
            console.log(this.pot)
        }
    }

    public render() {
        const { frozen } = this.props;

        return (
            <MuiToolbar>
                <ToolbarGroup firstChild={true}>
                    <RaisedButton
                        disabled={ frozen }
                        icon={ <AvPause style={{ margin: '6px' }} /> }
                        primary={true}
                        onClick={ this.toggleInterval.bind(this) }
                    />
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle text={ this.state.time } />
                </ToolbarGroup>
                <ToolbarGroup lastChild={true}>
                    <RaisedButton
                        disabled={ frozen }
                        icon={ <Sync style={{ margin: '6px' }} /> }
                        secondary={true}
                    />
                </ToolbarGroup>
            </MuiToolbar>
        );
    }
}