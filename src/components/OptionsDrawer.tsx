import * as React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import RepRangeSlider from './RepRangeSlider';
import RpeRangeSlider from './RpeRangeSlider';

// @todo considerations for mobile view

interface Props {
    isOpen: boolean;
    repMin: number;
    repMax: number;
    rpeMin: number;
    rpeMax: number;
    closeDrawerHandler: () => void;
    repRangeChangeHandler: (e: React.ChangeEvent<{}>, value: number | number[]) => void;
    rpeRangeChangeHandler: (e: React.ChangeEvent<{}>, value: number | number[]) => void;
};

const useStyles = makeStyles((theme: Theme) => createStyles({
    drawerContents: {
        height: '100%',
        width: '100%',
        // backgroundColor: theme.palette.primary.main,
        // color: theme.palette.primary.contrastText,
    },
    drawerCloseButton: {
        // color: theme.palette.primary.contrastText,
    },
    drawerHeader: {
        // backgroundColor: theme.palette.primary.main,
        // color: theme.palette.primary.contrastText,
        display: 'flex',
        alignItems: 'center',
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
                <Typography variant="h6">Options</Typography>
            </div>
            <Divider />
            <List className={classes.drawerContents}>
                <ListItem>
                    <RepRangeSlider
                        min={props.repMin}
                        max={props.repMax}
                        changeHandler={props.repRangeChangeHandler}
                    />
                </ListItem>
                <ListItem>
                    <RpeRangeSlider
                        min={props.rpeMin}
                        max={props.rpeMax}
                        changeHandler={props.rpeRangeChangeHandler}
                    />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default OptionsDrawer;
