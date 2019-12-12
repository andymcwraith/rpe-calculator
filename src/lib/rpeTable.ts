import { oneRepMax, load } from './rpeCalc';
import { RPETableItem } from '../types';

const rpeTable = (weight: number, reps: number, rpe: number): RPETableItem[] => {
    const result = [];

    const isInValidRepRange = reps > 0 && reps <= 12;
    const isInValidRpeRange = rpe > 6 && rpe <= 10;

    if (isInValidRpeRange && isInValidRepRange) {
        const oneRM = oneRepMax(weight, reps, rpe);

        const repsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const rpeArray = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];

        if (oneRM !== null) {
            for (let i = 0; i < repsArray.length; i += 1) {
                for (let j = 0; j < rpeArray.length; j += 1) {
                    const calculatedLoad = load(oneRM, repsArray[i], rpeArray[j]);

                    if (calculatedLoad !== null) {
                        const item: RPETableItem = {
                            reps: repsArray[i],
                            rpe: rpeArray[j],
                            load: calculatedLoad,
                        };

                        result.push(item);
                    }
                }
            }
        }
    }

    return result;
};

export default rpeTable;
