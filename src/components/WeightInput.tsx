import * as React from 'react';
import TextField from '@material-ui/core/TextField';

import { WeightUnit } from '../types';

interface Props {
    value: string;
    unit: WeightUnit;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const WeightInput: React.FC<Props> = props => {
    const label = `Weight (${props.unit === 'kg' ? 'kgs' : 'lbs'})`;
    
    return (
        <TextField
            id="weight-input"
            type="number"
            label={label}
            value={props.value}
            onChange={props.onChangeHandler}
        />
    );
};

export default WeightInput;
