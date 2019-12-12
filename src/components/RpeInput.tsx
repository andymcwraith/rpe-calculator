import * as React from 'react';
import TextField from '@material-ui/core/TextField';

interface Props {
    value: string;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RpeInput: React.FC<Props> = props => {
    return (
        <TextField
            id="rpe-input"
            type="number"
            label="RPE"
            value={props.value}
            onChange={props.onChangeHandler}
        />
    );
};

export default RpeInput;
