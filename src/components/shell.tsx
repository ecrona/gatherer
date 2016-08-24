import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

import { setViewState } from './actions/setViewState'
import { ViewState } from './viewState'

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
                    <a onClick={ () => dispatch(setViewState(ViewState.List)) }>List</a>
                    <a onClick={ () => dispatch(setViewState(ViewState.Gather)) }>Gather</a>
                    <a onClick={ () => dispatch(setViewState(ViewState.Report)) }>Report</a>
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