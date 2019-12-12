import * as React from 'react';
import TextField from '@material-ui/core/TextField';

interface Props {
    value: string;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const WeightInput: React.FC<Props> = props => {
    return (
        <TextField
            id="weight-input"
            type="number"
            label="Weight"
            value={props.value}
            onChange={props.onChangeHandler}
        />
    );
};

export default WeightInput;
