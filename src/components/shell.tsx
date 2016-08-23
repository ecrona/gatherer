import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import * as Actions from './actions';

class Shell extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        console.log(props)
    }
    
    public render() {
        const { viewState, dispatch } = this.props;

        return (
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title="Gatherer"
                        showMenuIconButton={ false }
                        iconElementRight={<FlatButton label="Gather" />}
                    />
                </MuiThemeProvider>
                <div>
                    <a onClick={ () => dispatch(Actions.viewList()) }>List</a>
                    <a onClick={ () => dispatch(Actions.viewDetail()) }>Detail</a>
                    <a onClick={ () => dispatch(Actions.viewEdit()) }>Edit</a>
                </div>
                <div>
                    State: { viewState }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  viewState: state.viewState
});

export default connect(mapStateToProps)(Shell);