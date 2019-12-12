import * as React from 'react';

import Layout from '../components/Layout';
import rpeTable from '../lib/rpeTable';
import { RPETableItem } from '../types';

import './App.css';

interface State {
    weight: string;
    reps: string;
    rpe: string;
    results: RPETableItem[];
}

class App extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            weight: '',
            reps: '',
            rpe: '',
            results: [],
        };

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
                <header className="app-header">
                    <p>RPE Calculator</p>
                </header>
                <Layout
                    weight={this.state.weight}
                    reps={this.state.reps}
                    rpe={this.state.rpe}
                    weightInputChangeHandler={this.handleWeightInputChange}
                    repsInputChangeHandler={this.handleRepsInputChange}
                    rpeInputChangeHandler={this.handleRpeInputChange}
                />
            </div>
        );
    }
}

export default App;
