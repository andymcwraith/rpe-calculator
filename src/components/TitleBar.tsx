import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
    
};

const useStyles = makeStyles({
    toolbar: {
        backgroundColor: '#282c34',
    },
    title: {
        color: '#ffffff',
    },
});

const ActionBar: React.FC<Props> = props => {
    const classes = useStyles();
    
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.title}>RPE Calculator</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default ActionBar;
