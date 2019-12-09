import * as React from 'react';
import TextField from '@material-ui/core/TextField';

interface Props {
    value: string;
}

const RpeInput: React.FC<Props> = props => {
    return <TextField id="rpe-input" type="number" label="RPE" value={props.value} />
};

export default RpeInput;
