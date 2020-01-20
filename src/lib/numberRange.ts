const numberRange = (min: number, max: number, increment: number): number[] => {
    const range = [];
    
    for (let i = min; i <= max; i += increment) {
        range.push(i);
    }

    return range;
};

export default numberRange;
