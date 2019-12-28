import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import UnitSelector from './UnitSelector';
import { WeightUnit } from '../types';

interface Props {
    weightUnit: WeightUnit;
    weightUnitChangeHandler: (e: React.ChangeEvent<{ value: unknown }>) => void;
};

const useStyles = makeStyles({
    toolbar: {
        backgroundColor: '#282c34',
    },
    title: {
        color: '#ffffff',
    },
    unitSelectorContainer: {
        marginLeft: 'auto',
    },
});

const ActionBar: React.FC<Props> = props => {
    const classes = useStyles();
    
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.title}>RPE Calculator</Typography>
                <div className={classes.unitSelectorContainer}>
                    <UnitSelector
                        unit={props.weightUnit}
                        changeHandler={props.weightUnitChangeHandler}
                    />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default ActionBar;
