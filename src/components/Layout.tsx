import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import RepsInput from './RepsInput';
import RpeInput from './RpeInput';
import WeightInput from './WeightInput';

import './Layout.css';

interface Props {
    weight: string;
    reps: string;
    rpe: string;
}

const Layout: React.FC<Props> = props => {
    return (
        <Grid className="layout" container={true}>
            <Grid item={true} xs={12} md={4}>
                <WeightInput value={props.weight} />
            </Grid>
            <Grid item={true} xs={12} md={4}>
                <RepsInput value={props.reps} />
            </Grid>
            <Grid item={true} xs={12} md={4}>
                <RpeInput value={props.rpe} />
            </Grid>
        </Grid>
    );
};

export default Layout;
