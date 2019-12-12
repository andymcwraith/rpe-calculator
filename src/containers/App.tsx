import * as React from 'react';

import Layout from '../components/Layout';

import './App.css';

interface State {
    weight: string;
    reps: string;
    rpe: string;
}

class App extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            weight: '',
            reps: '',
            rpe: '',
        };

        this.handleWeightInputChange = this.handleWeightInputChange.bind(this);
        this.handleRepsInputChange = this.handleRepsInputChange.bind(this);
        this.handleRpeInputChange = this.handleRpeInputChange.bind(this);
    }

    handleWeightInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target as HTMLInputElement;

        this.setState({ ...this.state, weight: value });
    }

    handleRepsInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target as HTMLInputElement;

        this.setState({ ...this.state, reps: value });
    }

    handleRpeInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target as HTMLInputElement;

        this.setState({ ...this.state, rpe: value });
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
