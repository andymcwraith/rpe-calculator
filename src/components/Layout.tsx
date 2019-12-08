import * as React from 'react';
import Grid from '@material-ui/core/Grid';

interface Props {}

class Layout extends React.PureComponent<Props, {}> {
    render(): React.ReactNode {
        return (
            <Grid container={true} xs={12}>
                <Grid item={true} xs={12} md={4}>
                    Weight Input
                </Grid>
                <Grid item={true} xs={12} md={4}>
                    Reps Input
                </Grid>
                <Grid item={true} xs={12} md={4}>
                    RPE Input
                </Grid>
            </Grid>
        );
    }
}

export default Layout;
