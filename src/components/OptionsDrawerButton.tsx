import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
    onClickHandler: () => void;
};

const useStyles = makeStyles({
    button: {
        color: '#ffffff',
        marginLeft: '1em',
    },
});

const OptionsDrawerButton: React.FC<Props> = props => {
    const classes = useStyles();
    
    return (
        <IconButton className={classes.button} edge="start" onClick={props.onClickHandler}>
            <MenuIcon />
        </IconButton>
    );
};

export default OptionsDrawerButton;
