import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import '../style/App.css';

const persons = [
    {  id: '1',  login: 'Oliver Hen', homeFloor: '5' , avatarUrl: 'http://assets.servedby-buysellads.com/p/manage/asset/id/61576'},
    {  id: '2',  login: 'Olver Hasen', homeFloor: '1' , avatarUrl: 'http://assets.servedby-buysellads.com/p/manage/asset/id/61576'},
    {  id: '3',  login: 'Oiver Hans', homeFloor: '2' , avatarUrl: 'http://assets.servedby-buysellads.com/p/manage/asset/id/61576'},
    {  id: '4',  login: 'Oler Haen', homeFloor: '3' , avatarUrl: 'http://assets.servedby-buysellads.com/p/manage/asset/id/61576'},
    {  id: '5',  login: 'Olir Hansen', homeFloor: '4' , avatarUrl: 'http://assets.servedby-buysellads.com/p/manage/asset/id/61576'},
    {  id: '6',  login: 'Olver Hanen', homeFloor: '6' , avatarUrl: 'http://assets.servedby-buysellads.com/p/manage/asset/id/61576'},
    {  id: '7',  login: 'Olive Hasen', homeFloor: '6' , avatarUrl: 'http://assets.servedby-buysellads.com/p/manage/asset/id/61576'},
    {  id: '8',  login: 'Oliver Hanse', homeFloor: '6' , avatarUrl: 'http://assets.servedby-buysellads.com/p/manage/asset/id/61576'},
];

export default class InputUsers extends Component {
    state = {
        searchText: '',
        values: [],
        users: []
    };
    
    handleUpdateInput = (searchText) => {
        this.setState({
            searchText: searchText,
            
        });
    };

    handleNewRequest = (searchText) => {
        this.setState({
            users: [...this.state.users, searchText],
            searchText: '',
        });
    };
    selectionRenderer = (users) => {
        switch (users.length) {
            case 0:
                return '';
            case 1:
                return persons[users[0]].name;
            default:
                return `${users.length} names selected`;
        }
    }

    menuItems(persons) {
        return persons.map((person) => (
            person.login +' '+ person.homeFloor + ' этаж'
        ));
    }

    render() {
        return (
            <div>
                <AutoComplete
                    hintText="Например, Тор Одинович "
                    searchText={this.state.searchText}
                    onUpdateInput={this.handleUpdateInput}
                    onNewRequest={this.handleNewRequest}
                    dataSource={this.menuItems(persons)}
                    filter={AutoComplete.fuzzyFilter}
                    value={this.state.values}
                    openOnFocus={true}
                    fullWidth={false}
                    maxHeight={200}
                    listStyle={{ borderRadius: '10px', overflowY: 'scroll', height: '200px', boxSizing: 'border-box' }}
                />
                <div>{this.state.users + " "}</div>
            </div>
        );
    }
}