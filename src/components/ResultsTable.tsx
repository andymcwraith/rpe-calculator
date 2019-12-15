import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles'

import { RPETableItem } from '../types';

interface Props {
    results: RPETableItem[];
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
        margin: '1em',
    },
});

const tableHeadRow = (repCounts: number[]): JSX.Element => {
    const repCountCells = repCounts
        .sort((a, b) => a - b)
        .map(repCount => {
        const text = repCount !== 1 ? `${repCount} reps` : `${repCount} rep`;

        return <TableCell key={`${repCount}-head-cell`}>{text}</TableCell>;
    });

    return (
        <TableRow>
            <TableCell key="blank-head-cell" />
            {repCountCells}
        </TableRow>
    );
};

const tableBodyRow = (rpe: number, repCounts: number[], results: RPETableItem[]): JSX.Element => {
    // @todo later weight unit will be changeable
    const unit = 'kgs';

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
            <TableCell key={`rpe-${rpe}-ref`}>{rpe} RPE</TableCell>
            {cells}
        </TableRow>
    );
};

const ResultsTable: React.FC<Props> = props => {
    const { results } = props;

    const classes = useStyles();

    if (results.length > 0) {
        const repsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const rpeArray = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];

        const tableBodyRows = rpeArray
            .sort((a, b) => a - b)
            .reverse()
            .map(rpe => tableBodyRow(rpe, repsArray, results));

        return (
            <Table className={classes.table}>
                <TableHead>
                    {tableHeadRow(repsArray)}
                </TableHead>
                <TableBody>
                    {tableBodyRows}
                </TableBody>
            </Table>
        );
    }

    return null;
};

export default ResultsTable;
