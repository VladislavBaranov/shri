import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Time from './timePicker'
import InputUsers from './inputUsers'
import '../style/dialogButton.css'

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

export default class DialogButton extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const actions = [
      <FlatButton
        label="Отмена"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Сохранить встречу"
        primary={true}
        onClick={this.handleClose}
      />,
    ];
    const style = {
      boxShadow: 'none',
    };

    return (
      <div>
        <RaisedButton label="Создать встречу" primary={true} style={style} onClick={this.handleOpen} />
        <Dialog
          title="Яндекс Переговорки"
          actions={actions}
          modal={false}
          contentStyle={customContentStyle}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoDetectWindowHeight={true}
          titleStyle={{
            borderBottom: '2px solid #FF9800',
          }}
          actionsContainerStyle={{
            textAlign: 'center',
            borderTop: '2px solid #FF9800',
          }}
        >
          <div className="dialog-window">
            <div className="dialog-items dialog-item1"><h2>Новая встреча</h2></div>
            <div className="dialog-items dialog-item2"></div>
            <div className="dialog-items dialog-item3">Тема</div>
            <div className="dialog-items dialog-item4">
              <div className="dialog-items">Дата</div>
              <div className="dialog-items">Начало</div>
              <div className="dialog-items">Конец</div>
              <div className="dialog-items"></div>
              <div className="dialog-items"> <Time /> </div>
              <div className="dialog-items"><Time /> </div>
            </div>
            <div className="dialog-items dialog-item5">
              <div className="dialog-items">Участники</div>
              <div className="dialog-items"><InputUsers /></div>
            </div>
            <div className="dialog-items dialog-item6">Ваша переговорка</div>
            <div className="dialog-items dialog-item7"></div>

          </div>
        </Dialog>
      </div>
    );
  }
}

