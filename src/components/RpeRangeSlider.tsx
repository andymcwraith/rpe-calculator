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
        marginBottom: '2.5em',
    },
    slider: {},
});

const RpeRangeSlider: React.FC<Props> = props => {
    const classes = useStyles();

    const value = [props.min, props.max];

    return (
        <div className={classes.container}>
            <Typography
                id="rpe-range-slider-label"
                className={classes.label}
            >
                Displayed RPE range
            </Typography>
            <Slider
                id="rpe-range-slider"
                className={classes.slider}
                value={value}
                onChange={props.changeHandler}
                min={6}
                max={10}
                step={0.5}
                valueLabelDisplay="on"
                marks
            />
        </div>
    );
};

export default RpeRangeSlider;
