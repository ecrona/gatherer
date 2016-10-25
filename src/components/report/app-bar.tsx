import * as React from 'react'

import MaterialAppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

interface Props {
    frozen: boolean;
    close: () => void;
    modify: () => void;
}

export default class AppBar extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }
    
    public render() {
        const { frozen, close, modify } = this.props;

        return (
            <MaterialAppBar
                style={{ marginBottom: '24px' }}
                title="Gatherer"
                iconElementLeft={
                    <IconButton onClick={ close }>
                        <NavigationClose />
                    </IconButton>
                }
                iconElementRight={
                    <FlatButton
                        disabled={ frozen }
                        onClick={ modify }
                        label="Modify"
                    />
                }
            />
        );
    }
}