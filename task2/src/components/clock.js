import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        const msInMin=60000; 
        this.timerID = setInterval(
            () => this.tick(),
            msInMin
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    addZero(min) {
        if (min < 10) min = "0" + min;  // add zero in front of numbers < 10
        return min
    };
    atTime() {
        const minInHour = 60;
        const halfBlock = 3.14
        let time = (((this.state.date.getHours() * minInHour + this.state.date.getMinutes() - 8 * minInHour) * 100/(24*minInHour-8*minInHour)) + halfBlock).toFixed(2);
        console.log(time);
        if (time > 0)  return time;
        return '-100';
    }
    render() {
            const divStyle = {
            color: '#1376FA',
            position: 'absolute',
            transform: 'translateX(' + this.atTime()  + '%) ',
            width: '100%',
            height: '1300px',
            padding: '0',
            margin: '0',
            fontSize: '15px',
            pointerEvents: 'none',
            marginTop: '10px'
        };
        const clockBlock = {
            position: 'relative',
            width: '100%',
        };
        const clockFace = {
            width: '50px',
            marginLeft: '-25px',
            textAlign: 'center',
            padding: '2px',
            borderRadius: '14px',
            color: 'white',
            fontSize: '14px',
            background: '#007dff',
            marginTop: '0'
        };
        const clockLine = {
            width: '1px',
            height: '100%',
            marginLeft: '0px',
            position: 'absolute',
            borderRadius: '14px',
            background: '#007dff',
            marginTop: '-10px'
        };

        return (
            <div style={clockBlock}>
                <div style={divStyle}>
                    <p style={clockFace}>{this.state.date.getHours()}:{this.addZero(this.state.date.getMinutes())}</p>
                    <p style={clockLine}></p>
                </div>
            </div>
        );
    }
}

export default Clock