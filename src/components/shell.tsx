import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

interface State {
    initialLoad: boolean;
}

export class Shell extends React.Component<any, State> {
	constructor(props: any, state: State) {
		super(props, state);
		
		this.state = {
            initialLoad: true
		};
	}
	
	public render() {
		if (!this.state.initialLoad) {
			return (
				<div>Loading ...</div>
			)
		}
		
		return (
			<div>
                <MuiThemeProvider>
                    <AppBar
                        title="Gatherer"
                        showMenuIconButton={ false }
                        iconElementRight={<FlatButton label="Gather" />}
                    />
                </MuiThemeProvider>
			</div>
		);
	}
}