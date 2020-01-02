import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import OptionsDrawerButton from './OptionsDrawerButton';
import UnitSelector from './UnitSelector';
import { WeightUnit } from '../types';

interface Props {
    weightUnit: WeightUnit;
    weightUnitChangeHandler: (e: React.ChangeEvent<{ value: unknown }>) => void;
    openDrawerHandler: () => void;
};

const useStyles = makeStyles((theme: Theme) => createStyles({
    toolbar: {
        backgroundColor: theme.palette.primary.main,
    },
    title: {
        color: theme.palette.primary.contrastText,
    },
    optionsContainer: {
        marginLeft: 'auto',
    },
}));

const ActionBar: React.FC<Props> = props => {
    const classes = useStyles();
    
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.title}>RPE Calculator</Typography>
                <div className={classes.optionsContainer}>
                    <UnitSelector
                        unit={props.weightUnit}
                        changeHandler={props.weightUnitChangeHandler}
                    />
                    <OptionsDrawerButton onClickHandler={props.openDrawerHandler} />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default ActionBar;
