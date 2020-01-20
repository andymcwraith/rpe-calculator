import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import RepsInput from './RepsInput';
import RpeInput from './RpeInput';
import WeightInput from './WeightInput';
import ResultsTable from './ResultsTable';
import { RPETableItem, WeightUnit } from '../types';

interface Props {
    displayedRepMin: number;
    displayedRepMax: number;
    displayedRpeMin: number;
    displayedRpeMax: number;
    weight: string;
    reps: string;
    rpe: string;
    results: RPETableItem[];
    weightUnit: WeightUnit;
    weightInputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    repsInputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    rpeInputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles({
    layout: {
        marginTop: '1rem',
    },
});

const Layout: React.FC<Props> = props => {
    const classes = useStyles();
    
    return (
        <Container maxWidth="md">
            <Grid className={classes.layout} container={true} justify="center" alignItems="center">
                <Grid item={true} xs={12} md={4}>
                    <WeightInput
                        value={props.weight}
                        unit={props.weightUnit}
                        onChangeHandler={props.weightInputChangeHandler}
                    />
                </Grid>
                <Grid item={true} xs={12} md={4}>
                    <RepsInput value={props.reps} onChangeHandler={props.repsInputChangeHandler} />
                </Grid>
                <Grid item={true} xs={12} md={4}>
                    <RpeInput value={props.rpe} onChangeHandler={props.rpeInputChangeHandler} />
                </Grid>
                <Grid item={true} xs={12}>
                    <ResultsTable
                        displayedRepMin={props.displayedRepMin}
                        displayedRepMax={props.displayedRepMax}
                        displayedRpeMin={props.displayedRpeMin}
                        displayedRpeMax={props.displayedRpeMax}
                        results={props.results}
                        weightUnit={props.weightUnit}
                    />
                </Grid>
            </Grid>
        </Container>
        
    );
};

export default Layout;
