import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'

import RepsInput from './RepsInput';
import RpeInput from './RpeInput';
import WeightInput from './WeightInput';
import ResultsTable from './ResultsTable';
import { RPETableItem } from '../types';

import './Layout.css';

interface Props {
    weight: string;
    reps: string;
    rpe: string;
    results: RPETableItem[];
    weightInputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    repsInputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    rpeInputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Layout: React.FC<Props> = props => {
    return (
        <Container maxWidth="md">
            <Grid className="layout" container={true} justify="center" alignItems="center">
                <Grid item={true} xs={12} md={4}>
                    <WeightInput value={props.weight} onChangeHandler={props.weightInputChangeHandler} />
                </Grid>
                <Grid item={true} xs={12} md={4}>
                    <RepsInput value={props.reps} onChangeHandler={props.repsInputChangeHandler} />
                </Grid>
                <Grid item={true} xs={12} md={4}>
                    <RpeInput value={props.rpe} onChangeHandler={props.rpeInputChangeHandler} />
                </Grid>
                <Grid item={true} xs={12}>
                    <Paper>
                        <ResultsTable results={props.results} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
        
    );
};

export default Layout;
