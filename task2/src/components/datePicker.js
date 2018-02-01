import '../style/App.css'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'moment/locale/ru'
import 'react-datepicker/dist/react-datepicker.css'
import React from 'react'
import PropTypes from 'prop-types'

class Example extends React.Component {
    state = {
        startDate: moment()
    };

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    datePlus() {
        this.setState({
            startDate: this.state.startDate.add(1, 'days')
        });
    }

    dateMinus() {
        this.setState({
            startDate: this.state.startDate.subtract(1, 'days')
        });
    }

    render() {
        return <div>
            < Button className="buttom-data buttom-data-left"
                click={this.dateMinus.bind(this)}
            />
            <span className="text-data">
                < DatePicker
                    customInput={< ExampleCustomInput />}
                    dateFormat="DD MMM"
                    selected={this.state.startDate}
                    onChange={this.handleChange.bind(this)}
                    monthsShown={3}
                /></span >

            <span className="text-data" > {
                this.state.startDate.calendar(null, {
                    sameDay: '[ Сегодня]',
                    nextDay: '[ Время есть ]',
                    nextWeek: ' dddd',
                    lastDay: '[ Поезд ушел ]',
                    lastWeek: ' dddd',
                    sameElse: ' YYYY'
                })
            } </span>

            < Button className="buttom-data buttom-data-right"
                click={this.datePlus.bind(this)}
            />
        </div>;
    }
}

const Button = (props) => {
    return <div className={props.className}
        onClick={props.click} > {props.text} </div>;
}

class ExampleCustomInput extends React.Component {

    render() {
        return (<button className="example-custom-input"
            onClick={this.props.onClick} > {this.props.value} </button>

        )
    }
}

ExampleCustomInput.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
};


export default Example