import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles'

import numberRange from '../lib/numberRange';
import { RPETableItem, WeightUnit } from '../types';

interface Props {
    results: RPETableItem[];
    weightUnit: WeightUnit;
    displayedRepMin: number;
    displayedRepMax: number;
    displayedRpeMin: number;
    displayedRpeMax: number;
}

const getLoad = (rpe: number, reps: number, results: RPETableItem[]): number | null => {
    const item = results.find(value => value.rpe === rpe && value.reps === reps);

    if (typeof item === 'undefined') {
        return null;
    }

    return item.load;
};

const useStyles = makeStyles({
    table: {
        maxWidth: '100%',
        margin: 0,
        whiteSpace: 'nowrap',
    },
    tableContainer: {
        position: 'relative',
        marginTop: '1em',
    },
    tableScroller: {
        overflowX: 'scroll',
        overflowY: 'visible',
        marginLeft: '100px',
        borderRight: '1px solid rgba(224, 224, 224, 1)',
    },
});

const BlackTableCell = withStyles((theme: Theme) => {
    return createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
    });
})(TableCell);

const StickyBlackTableCell = withStyles(() => {
    return createStyles({
        body: {
            position: 'absolute',
            left: 0,
            top: 'auto',
            width: '100px',
            padding: '16px 0',
            textAlign: 'center',
            fontWeight: 500,
        },
    });
})(BlackTableCell);

const StickyTableHeaderCell = withStyles(() => {
    return createStyles({
        head: {
            position: 'absolute',
            left: 0,
            top: 'auto',
            border: 'none',
            width: '100px',
            padding: '16px 0',
        },
    });
})(TableCell);

const tableHeadRow = (repCounts: number[]): JSX.Element => {
    const repCountCells = repCounts
        .sort((a, b) => a - b)
        .map(repCount => {
        const text = repCount !== 1 ? `${repCount} reps` : `${repCount} rep`;

        return <BlackTableCell key={`${repCount}-head-cell`}>{text}</BlackTableCell>;
    });

    return (
        <TableRow>
            <StickyTableHeaderCell key="blank-head-cell" />
            {repCountCells}
        </TableRow>
    );
};

const tableBodyRow = (rpe: number, repCounts: number[], results: RPETableItem[], weightUnit: WeightUnit): JSX.Element => {
    const unit = weightUnit === 'kg' ? 'kgs' : 'lbs';

    const cells = repCounts
        .sort((a, b) => a - b)
        .map(repCount => {
            const load = getLoad(rpe, repCount, results);

            let displayedLoad = null;
            if (load !== null) {
                displayedLoad = `${load.toFixed(2)} ${unit}`;
            }

            return (
                <TableCell key={`rpe-${rpe}-${repCount}`}>{displayedLoad}</TableCell>
            );
        });

    return (
        <TableRow>
            <StickyBlackTableCell key={`rpe-${rpe}-ref`}>{rpe} RPE</StickyBlackTableCell>
            {cells}
        </TableRow>
    );
};

const ResultsTable: React.FC<Props> = props => {
    const {
        displayedRepMin,
        displayedRepMax,
        displayedRpeMin,
        displayedRpeMax,
        results,
        weightUnit,
    } = props;

    const classes = useStyles();

    if (results.length > 0) {
        const repsArray = numberRange(displayedRepMin, displayedRepMax, 1);
        const rpeArray = numberRange(displayedRpeMin, displayedRpeMax, 0.5);

        const tableBodyRows = rpeArray
            .sort((a, b) => a - b)
            .reverse()
            .map(rpe => tableBodyRow(rpe, repsArray, results, weightUnit));

        return (
            <div className={classes.tableContainer}>
                <div className={classes.tableScroller}>
                    <Table className={classes.table}>
                        <TableHead>
                            {tableHeadRow(repsArray)}
                        </TableHead>
                        <TableBody>
                            {tableBodyRows}
                        </TableBody>
                    </Table>
                </div>
            </div>
            
        );
    }

    return null;
};

export default ResultsTable;
