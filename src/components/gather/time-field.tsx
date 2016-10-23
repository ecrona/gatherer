import * as React from 'react'
import TextField from 'material-ui/TextField'

interface Props {
    id: string;
    value: string;
    onChange: (e) => void;
}

export class TimeField extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const {
            id,
            value,
            onChange
        } = this.props;

        return (
            <TextField
                id={ id }
                value={ value }
                onChange={ onChange }
                inputStyle={{ textAlign: 'center' }}
                style={{ width: '30px', fontSize: '20px' }}
            />
        );
    }
}