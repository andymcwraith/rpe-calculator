import * as React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// @todo considerations for mobile view

interface Props {
    isOpen: boolean;
    closeDrawerHandler: () => void;
};

const useStyles = makeStyles((theme: Theme) => createStyles({
    drawerContents: {
        height: '100%',
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    drawerCloseButton: {
        color: theme.palette.primary.contrastText,
    },
    drawerHeader: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
}));

const OptionsDrawer: React.FC<Props> = props => {
    const classes = useStyles();
    
    return (    
        <Drawer
            variant="persistent"
            anchor="right"
            open={props.isOpen}
        >
            <div className={classes.drawerHeader}>
                <IconButton
                    className={classes.drawerCloseButton}
                    onClick={props.closeDrawerHandler}
                >
                    <ChevronRightIcon />
                </IconButton>
            </div>
            <Divider />
            <List className={classes.drawerContents}>
                <ListItem>
                    Contents
                </ListItem>
            </List>
        </Drawer>
    );
};

export default OptionsDrawer;
