import * as React from 'react'

import { Popover, PopoverAnimationVertical } from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import CircularProgress from 'material-ui/CircularProgress'

import { Player } from 'models/player'
import { Action } from 'models/action'

interface Props {
    show: boolean;
    increase: () => void;
    decrease: () => void;
    loading: boolean;
    close: () => void;
    selectedElement: any;
}

export class Popup extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }
    
    public render() {
        const {
            show,
            increase,
            decrease,
            loading,
            close,
            selectedElement
        } = this.props;

        return (
            <Popover
                open={ show }
                anchorEl={ selectedElement }
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                animation={ PopoverAnimationVertical }
                onRequestClose={ close }
            >
                { loading ?
                    <CircularProgress style={{ padding: '9px', overflow: 'hidden' }} />
                    :
                    <Menu>
                        <MenuItem onClick={ increase } primaryText="Increase" />
                        <MenuItem onClick={ decrease } primaryText="Decrease" />
                    </Menu>
                }
            </Popover>
        );
    }
}