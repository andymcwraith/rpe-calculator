import * as React from 'react';

import Layout from '../components/Layout';
import OptionsDrawer from '../components/OptionsDrawer';
import TitleBar from '../components/TitleBar';
import rpeTable from '../lib/rpeTable';
import { RPETableItem, WeightUnit } from '../types';

interface State {
    weight: string;
    reps: string;
    rpe: string;
    results: RPETableItem[];
    weightUnit: WeightUnit;
    openDrawer: boolean;
}

class App extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            weight: '',
            reps: '',
            rpe: '',
            results: [],
            weightUnit: 'kg',
            openDrawer: false,
        };

        this.handleCloseDrawer = this.handleCloseDrawer.bind(this);
        this.handleOpenDrawer = this.handleOpenDrawer.bind(this);
        this.handleWeightUnitChange = this.handleWeightUnitChange.bind(this);
        this.handleWeightInputChange = this.handleWeightInputChange.bind(this);
        this.handleRepsInputChange = this.handleRepsInputChange.bind(this);
        this.handleRpeInputChange = this.handleRpeInputChange.bind(this);
        this.results = this.results.bind(this);
    }

    handleWeightInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target as HTMLInputElement;

        const results = this.results(value, this.state.reps, this.state.rpe);

        this.setState({ ...this.state, results, weight: value });
    }

    handleRepsInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target as HTMLInputElement;

        const results = this.results(this.state.weight, value, this.state.rpe);

        this.setState({ ...this.state, results, reps: value });
    }

    handleRpeInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target as HTMLInputElement;

        const results = this.results(this.state.weight, this.state.reps, value);

        this.setState({ ...this.state, results, rpe: value });
    }

    handleWeightUnitChange(e: React.ChangeEvent<{ value: unknown }>): void {
        this.setState({ ...this.state, weightUnit: e.target.value as WeightUnit });
    }

    handleOpenDrawer(): void {
        this.setState({ ...this.state, openDrawer: true });
    };

    handleCloseDrawer(): void {
        this.setState({ ...this.state, openDrawer: false });
    };

    results(weight: string, reps: string, rpe: string): RPETableItem[] {
        const weightNum = parseFloat(weight);
        const repsNum = parseFloat(reps);
        const rpeNum = parseFloat(rpe);

        if (!Number.isNaN(weightNum) && !Number.isNaN(repsNum) && !Number.isNaN(rpeNum)) {
            return rpeTable(weightNum, repsNum, rpeNum);
        }

        return [];
    }

    render(): React.ReactNode {
        return (
            <div className="app">
                <TitleBar
                    weightUnit={this.state.weightUnit}
                    weightUnitChangeHandler={this.handleWeightUnitChange}
                    openDrawerHandler={this.handleOpenDrawer}
                />
                <OptionsDrawer
                    isOpen={this.state.openDrawer}
                    closeDrawerHandler={this.handleCloseDrawer}
                />
                <Layout
                    weight={this.state.weight}
                    reps={this.state.reps}
                    rpe={this.state.rpe}
                    results={this.state.results}
                    weightUnit={this.state.weightUnit}
                    weightInputChangeHandler={this.handleWeightInputChange}
                    repsInputChangeHandler={this.handleRepsInputChange}
                    rpeInputChangeHandler={this.handleRpeInputChange}
                />
            </div>
        );
    }
}

export default App;
