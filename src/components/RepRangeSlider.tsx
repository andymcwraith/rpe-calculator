import * as React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
    min: number;
    max: number;
    changeHandler: (e: React.ChangeEvent<{}>, value: number | number[]) => void;
};

const useStyles = makeStyles({
    container: {
        width: '100%',
    },
    label: {
        // color: '#ffffff',
        marginBottom: '2.5em',
    },
    slider: {
        // color: '#ffffff',
    },
});

const RepRangeSlider: React.FC<Props> = props => {
    const classes = useStyles();

    const value = [props.min, props.max];

    return (
        <div className={classes.container}>
            <Typography
                id="rep-range-slider-label"
                className={classes.label}
            >
                Rep range
            </Typography>
            <Slider
                id="rep-range-slider"
                className={classes.slider}
                value={value}
                onChange={props.changeHandler}
                min={1}
                max={12}
                step={1}
                valueLabelDisplay="on"
                marks
            />
        </div>
    );
};

export default RepRangeSlider;
