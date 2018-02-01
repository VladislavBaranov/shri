import React from 'react';

class CreateEvents extends React.Component {
    state = {
        event: [],
        hover: false
    };

    createEvent(e) {
        this.setState({
            event: [...this.state.event, { dateStart: e.nativeEvent.offsetX }]
        }, () => {
            console.log('x=[' + this.state.dateStart + '] ', this.state.event);
        })
    }

    dialogWindow(i, event) {
        event.stopPropagation();
        console.log(arguments);
        this.setState({ event: [...this.state.event.filter((item, index) => index !== i)] })
    }

    toggleHover() {
        this.setState({ hover: !this.state.hover })
    };

    render() {
        const style = ({ transform }) => {
            return {
                color: 'white',
                background: 'rgba(211,221,231,0.9)',
                width: '6.25%',
                height: '100%',
                fontSize: '25px',
                position: 'absolute',
                transform
            }
        };
        return (
                <div className="meeting-line " onClick={this.createEvent.bind(this)}>
                    {this.state.event.map((item, i) => {
                        return <div style={style({ transform: 'translateX(' + (item.dateStart) + 'px)' })}
                            key={i} className="meeting"
                            onMouseEnter={this.toggleHover.bind(this)}
                            onMouseLeave={this.toggleHover.bind(this)}
                            onClick={this.dialogWindow.bind(this, i)}>
                        </div>
                    })}
                </div>
            
        )
    }
}

export default CreateEvents

