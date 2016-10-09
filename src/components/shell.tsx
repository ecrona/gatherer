import * as React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export class Shell extends React.Component<any, any> {
    public static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    constructor(props: any) {
        super(props);
        console.log(props)
    }

    public getChildContext() {
        return { muiTheme: getMuiTheme() };
    }
    
    public render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}