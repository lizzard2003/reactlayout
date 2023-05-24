import React, { Component } from 'react';

class CurrentTime extends Component {
    state = {
        time: new Date().toLocaleTimeString()
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }

    render() {
        return (
            <div>
                <h1>Current Time</h1>
                <h2>{this.state.time}</h2>
            </div>
        );
    }
}

export default CurrentTime;
