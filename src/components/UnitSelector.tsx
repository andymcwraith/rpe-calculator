import * as React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { WeightUnit } from '../types';

interface Props {
    unit: WeightUnit;
    changeHandler: (e: React.ChangeEvent<{ value: unknown }>) => void;
};

const useStyles = makeStyles((theme: Theme) => createStyles({
    formControl: {
        '& .MuiInput-underline:before': {
            borderBottom: '1px solid',
            borderBottomColor: theme.palette.primary.contrastText,
        },
        '& .MuiInput-underline:after': {
            borderBottom: '2px solid',
            borderBottomColor: theme.palette.primary.contrastText
        },
    },
    unitSelector: {
        color: theme.palette.primary.contrastText,
        '& svg.MuiSelect-icon': {
            color: theme.palette.primary.contrastText,
        },
    },
    unitSelectorHelpText: {
        color: theme.palette.primary.contrastText,
    },
}));

const UnitSelector: React.FC<Props> = props => {
    const classes = useStyles();
    
    return (
        <FormControl className={classes.formControl}>
            <Select
                className={classes.unitSelector}
                id="weight-unit-selector"
                value={props.unit}
                onChange={props.changeHandler}
            >
                <MenuItem value="kg">Kgs</MenuItem>
                <MenuItem value="pound">Ibs</MenuItem>
            </Select>
            <FormHelperText
                className={classes.unitSelectorHelpText}
            >
                Weight unit
            </FormHelperText>
        </FormControl>
    );
};

export default UnitSelector;
