import * as React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'

interface Props {
    viewOnly: boolean;
    overall: number;
    labelColor: string;
    click: (e) => void;
}

export class OverallButton extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }
    
    public render() {
        const {
            viewOnly,
            overall,
            labelColor,
            click
        } = this.props;

        return (
            <span>
                { this.props.viewOnly ?
                    <Avatar
                        backgroundColor={ labelColor }
                        size={ 30 }
                        style={{ float: 'right', marginRight: '16px', marginTop: '5px' }}
                    >
                        { overall }
                    </Avatar>
                :
                    <RaisedButton
                        onClick={ this.props.click }
                        label={ overall }
                        labelColor={ labelColor }
                        style={{ display: 'inline-block', float: 'right', marginRight: '16px' }}
                    />
                }
            </span>
        );
    }
}