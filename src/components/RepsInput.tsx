import * as React from 'react';
import TextField from '@material-ui/core/TextField';

interface Props {
    value: string;
}

const RepsInput: React.FC<Props> = props => {
    return <TextField id="reps-input" type="number" label="Reps" value={props.value} />
};

export default RepsInput;
