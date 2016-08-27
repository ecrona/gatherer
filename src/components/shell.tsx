import * as React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export class Shell extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        console.log(props)
    }
    
    public render() {
        return (
            <MuiThemeProvider muiTheme={ getMuiTheme() }>
                { this.props.children }
            </MuiThemeProvider>
        );
    }
}