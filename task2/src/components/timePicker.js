import React from 'react'
import TimePicker from 'material-ui/TimePicker'

export default class Time extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value24: null };
    }

    handleChangeTimePicker24 = (event, date) => {
        this.setState({ value24: date });
    };
    render() {
        return (
            <div>
                <TimePicker
                    value={this.state.value24}
                    onChange={this.handleChangeTimePicker24}
                    format="24hr"
                    hintText=""
                    minutesStep={5}
                    okLabel="Установить"
                    cancelLabel="Отменить"
                />
            </div>
        );
    }
}