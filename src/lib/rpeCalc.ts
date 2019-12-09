interface RPELookup {
    reps: number;
    rpe: number;
    loadPercent: number;
}

// based on Mike Tuchscherer’s Reactive Training Systems (https://articles.reactivetrainingsystems.com/2015/11/29/beginning-rts/)
const lookup: RPELookup[] = [
    { reps: 1, rpe: 10, loadPercent: 1 },
    { reps: 1, rpe: 9.5, loadPercent: 0.978 },
    { reps: 1, rpe: 9.0, loadPercent: 0.955 },
    { reps: 1, rpe: 8.5, loadPercent: 0.939 },
    { reps: 1, rpe: 8.0, loadPercent: 0.922 },
    { reps: 1, rpe: 7.5, loadPercent: 0.907 },
    { reps: 1, rpe: 7.0, loadPercent: 0.892 },
    { reps: 1, rpe: 6.5, loadPercent: 0.878 },
    { reps: 1, rpe: 6.0, loadPercent: 0.863 },

    { reps: 2, rpe: 10, loadPercent: 0.955 },
    { reps: 2, rpe: 9.5, loadPercent: 0.939 },
    { reps: 2, rpe: 9.0, loadPercent: 0.922 },
    { reps: 2, rpe: 8.5, loadPercent: 0.907 },
    { reps: 2, rpe: 8.0, loadPercent: 0.892 },
    { reps: 2, rpe: 7.5, loadPercent: 0.878 },
    { reps: 2, rpe: 7.0, loadPercent: 0.863 },
    { reps: 2, rpe: 6.5, loadPercent: 0.850 },
    { reps: 2, rpe: 6.0, loadPercent: 0.837 },

    { reps: 3, rpe: 10, loadPercent: 0.922 },
    { reps: 3, rpe: 9.5, loadPercent: 0.907 },
    { reps: 3, rpe: 9.0, loadPercent: 0.892 },
    { reps: 3, rpe: 8.5, loadPercent: 0.878 },
    { reps: 3, rpe: 8.0, loadPercent: 0.863 },
    { reps: 3, rpe: 7.5, loadPercent: 0.850 },
    { reps: 3, rpe: 7.0, loadPercent: 0.837 },
    { reps: 3, rpe: 6.5, loadPercent: 0.824 },
    { reps: 3, rpe: 6.0, loadPercent: 0.811 },

    { reps: 4, rpe: 10, loadPercent: 0.892 },
    { reps: 4, rpe: 9.5, loadPercent: 0.878 },
    { reps: 4, rpe: 9.0, loadPercent: 0.863 },
    { reps: 4, rpe: 8.5, loadPercent: 0.850 },
    { reps: 4, rpe: 8.0, loadPercent: 0.837 },
    { reps: 4, rpe: 7.5, loadPercent: 0.824 },
    { reps: 4, rpe: 7.0, loadPercent: 0.811 },
    { reps: 4, rpe: 6.5, loadPercent: 0.799 },
    { reps: 4, rpe: 6.0, loadPercent: 0.786 },

    { reps: 5, rpe: 10, loadPercent: 0.863 },
    { reps: 5, rpe: 9.5, loadPercent: 0.850 },
    { reps: 5, rpe: 9.0, loadPercent: 0.837 },
    { reps: 5, rpe: 8.5, loadPercent: 0.824 },
    { reps: 5, rpe: 8.0, loadPercent: 0.811 },
    { reps: 5, rpe: 7.5, loadPercent: 0.799 },
    { reps: 5, rpe: 7.0, loadPercent: 0.786 },
    { reps: 5, rpe: 6.5, loadPercent: 0.774 },
    { reps: 5, rpe: 6.0, loadPercent: 0.762 },

    { reps: 6, rpe: 10, loadPercent: 0.837 },
    { reps: 6, rpe: 9.5, loadPercent: 0.824 },
    { reps: 6, rpe: 9.0, loadPercent: 0.811 },
    { reps: 6, rpe: 8.5, loadPercent: 0.799 },
    { reps: 6, rpe: 8.0, loadPercent: 0.786 },
    { reps: 6, rpe: 7.5, loadPercent: 0.774 },
    { reps: 6, rpe: 7.0, loadPercent: 0.762 },
    { reps: 6, rpe: 6.5, loadPercent: 0.751 },
    { reps: 6, rpe: 6.0, loadPercent: 0.739 },

    { reps: 7, rpe: 10, loadPercent: 0.811 },
    { reps: 7, rpe: 9.5, loadPercent: 0.799 },
    { reps: 7, rpe: 9.0, loadPercent: 0.786 },
    { reps: 7, rpe: 8.5, loadPercent: 0.774 },
    { reps: 7, rpe: 8.0, loadPercent: 0.762 },
    { reps: 7, rpe: 7.5, loadPercent: 0.751 },
    { reps: 7, rpe: 7.0, loadPercent: 0.739 },
    { reps: 7, rpe: 6.5, loadPercent: 0.723 },
    { reps: 7, rpe: 6.0, loadPercent: 0.707 },

    { reps: 8, rpe: 10, loadPercent: 0.786 },
    { reps: 8, rpe: 9.5, loadPercent: 0.774 },
    { reps: 8, rpe: 9.0, loadPercent: 0.762 },
    { reps: 8, rpe: 8.5, loadPercent: 0.751 },
    { reps: 8, rpe: 8.0, loadPercent: 0.739 },
    { reps: 8, rpe: 7.5, loadPercent: 0.723 },
    { reps: 8, rpe: 7.0, loadPercent: 0.707 },
    { reps: 8, rpe: 6.5, loadPercent: 0.694 },
    { reps: 8, rpe: 6.0, loadPercent: 0.680 },

    { reps: 9, rpe: 10, loadPercent: 0.762 },
    { reps: 9, rpe: 9.5, loadPercent: 0.751 },
    { reps: 9, rpe: 9.0, loadPercent: 0.739 },
    { reps: 9, rpe: 8.5, loadPercent: 0.723 },
    { reps: 9, rpe: 8.0, loadPercent: 0.707 },
    { reps: 9, rpe: 7.5, loadPercent: 0.694 },
    { reps: 9, rpe: 7.0, loadPercent: 0.680 },
    { reps: 9, rpe: 6.5, loadPercent: 0.667 },
    { reps: 9, rpe: 6.0, loadPercent: 0.653 },

    { reps: 10, rpe: 10, loadPercent: 0.739 },
    { reps: 10, rpe: 9.5, loadPercent: 0.723 },
    { reps: 10, rpe: 9.0, loadPercent: 0.707 },
    { reps: 10, rpe: 8.5, loadPercent: 0.694 },
    { reps: 10, rpe: 8.0, loadPercent: 0.680 },
    { reps: 10, rpe: 7.5, loadPercent: 0.667 },
    { reps: 10, rpe: 7.0, loadPercent: 0.653 },
    { reps: 10, rpe: 6.5, loadPercent: 0.640 },
    { reps: 10, rpe: 6.0, loadPercent: 0.626 },

    { reps: 11, rpe: 10, loadPercent: 0.707 },
    { reps: 11, rpe: 9.5, loadPercent: 0.694 },
    { reps: 11, rpe: 9.0, loadPercent: 0.680 },
    { reps: 11, rpe: 8.5, loadPercent: 0.667 },
    { reps: 11, rpe: 8.0, loadPercent: 0.653 },
    { reps: 11, rpe: 7.5, loadPercent: 0.640 },
    { reps: 11, rpe: 7.0, loadPercent: 0.626 },
    { reps: 11, rpe: 6.5, loadPercent: 0.613 },
    { reps: 11, rpe: 6.0, loadPercent: 0.599 },

    { reps: 12, rpe: 10, loadPercent: 0.680 },
    { reps: 12, rpe: 9.5, loadPercent: 0.667 },
    { reps: 12, rpe: 9.0, loadPercent: 0.653 },
    { reps: 12, rpe: 8.5, loadPercent: 0.640 },
    { reps: 12, rpe: 8.0, loadPercent: 0.626 },
    { reps: 12, rpe: 7.5, loadPercent: 0.613 },
    { reps: 12, rpe: 7.0, loadPercent: 0.599 },
    { reps: 12, rpe: 6.5, loadPercent: 0.586 },
    { reps: 12, rpe: 6.0, loadPercent: 0.572 },
];

const roundHalf = (num: number): number => Math.round(num * 2) / 2;

const loadPercent = (reps: number, rpe: number): number | null => {
    const roundedReps = Math.floor(reps);
    const roundedRpe = roundHalf(rpe);

    const rpeLookup = lookup.find((item: RPELookup) => item.rpe === roundedRpe && item.reps === roundedReps);

    if (typeof rpeLookup !== 'undefined') {
        return rpeLookup.loadPercent;
    }

    return null;
};

export const oneRepMax = (weight: number, reps: number, rpe: number): number | null => {
    const lPercent = loadPercent(reps, rpe);

    if (lPercent !== null) {
       return weight / lPercent;
    }

    return null;
};

export const load = (oneRepMax: number, reps: number, rpe: number): number | null => {
    const lPercent = loadPercent(reps, rpe);

    if (lPercent !== null) {
        return oneRepMax * lPercent;
    }

    return null;
};
