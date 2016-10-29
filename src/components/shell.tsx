import * as React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { indigo500, indigo700, redA200 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const theme = getMuiTheme({
    palette: {
        primary1Color: indigo500,
        primary2Color: indigo700,
        accent1Color: redA200,
        pickerHeaderColor: indigo500,
    },
});


export class Shell extends React.Component<any, any> {
    public static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    constructor(props: any) {
        super(props);
        console.log(props)
    }

    public getChildContext() {
        return { muiTheme: getMuiTheme(theme) };
    }
    
    public render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}