import React, { Component } from 'react'
import logo from '../logo.svg'
import '../style/App.css'
import Example from '../components/datePicker'
import Clock from '../components/clock'
import TimeLine from '../components/timeLine'
import CreateEvents from '../components/creareEvent'
import DialogButton from '../components/dialogButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="grid-container">
          <div className="grid-item grid-item1"></div>
          <div className="grid-item grid-item2">
            <MuiThemeProvider>
              <DialogButton />
            </MuiThemeProvider></div>
          <div className="grid-item grid-item3"> <Example /></div>
          <div className="grid-item grid-item4">
            <div><Clock /></div>
            <div><TimeLine /></div>
          </div>
          <div className="grid-item grid-text"><p>7 ЭТАЖ</p></div>
          <div className="grid-item grid-gradient"></div>
          <div className="grid-item grid-text">
            <p><b>Ржавый фред</b></p>
            <p> 3 - 6 человек</p>
          </div>
          <div className="grid-item grid-gradient"> <CreateEvents /></div>
          <div className="grid-item grid-text">
            <p><b>Желтый дом</b></p>
            <p> до 10 человек</p>
          </div>
          <div className="grid-item grid-gradient"> <CreateEvents /></div>
          <div className="grid-item grid-text">
            <p><b>Прачечная</b></p>
            <p> до 10 человек</p>
          </div>
          <div className="grid-item grid-gradient"> <CreateEvents /></div>
          <div className="grid-item grid-text">
            <p><b>Оранжевый тюльпан</b></p>
            <p> до 10 человек</p>
          </div>
          <div className="grid-item grid-gradient"> <CreateEvents /></div>

          <div className="grid-item grid-text"><p>6 ЭТАЖ</p></div>
          <div className="grid-item grid-gradient"></div>
          <div className="grid-item grid-text">
            <p><b>Джокер</b></p>
            <p> 3 - 6 человек</p>
          </div>
          <div className="grid-item grid-gradient"> <CreateEvents /></div>
          <div className="grid-item grid-text">
            <p><b>Мариванна</b></p>
            <p> 3 - 6 человек</p>
          </div>
          <div className="grid-item grid-gradient"> <CreateEvents /></div>
          <div className="grid-item grid-text">
            <p><b>Тонкий боб</b></p>
            <p> 3 - 6 человек</p>
          </div>
          <div className="grid-item grid-gradient"> <CreateEvents /></div>
          <div className="grid-item grid-text">
            <p><b>Черная вдова</b></p>
            <p> 3 - 6 человек</p>
          </div>
          <div className="grid-item grid-gradient"> <CreateEvents /></div>
          <div className="grid-item grid-text">
            <p><b>Белорусский ликер</b></p>
            <p> 3 - 6 человек</p>
          </div>
          <div className="grid-item grid-gradient"><CreateEvents />
          </div>
          <div className="grid-item grid-text"></div>
          <div className="grid-item grid-gradient"></div>
        </div>
      </div>

    );
  }
}

export default App;

