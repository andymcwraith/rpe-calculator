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
    }

    render(): React.ReactNode {
        return (
            <div className="app">
                <header className="app-header">
                    <p>RPE Calculator</p>
                </header>
                <Layout weight={this.state.weight} reps={this.state.reps} rpe={this.state.rpe} />
            </div>
        );
    }
}

export default App;
