import * as React from 'react'

import MaterialAppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

interface Props {
    clickGather: () => void;
}

export default class AppBar extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }
    
    public render() {
        return (
            <MaterialAppBar
                style={{ marginBottom: '24px' }}
                title="Gatherer"
                showMenuIconButton={ false }
                iconElementRight={
                    <FlatButton
                        onClick={ this.props.clickGather }
                        label="Gather"
                    />
                }
            />
        );
    }
}