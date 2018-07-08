import React, { Component } from 'react';

import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            usersList: []
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
            .then((response) => response.json())
            .then((data) => {
                this.setState(
                    {usersList: data.results}
                );
            })
    };


    render() {
        return (
            <div className="App">
                {this.state.usersList.map((user) => {
                        return  <div key={user} className="App-user-view">
                                    {user.email}
                                    <img src={user.picture.large} alt="obrazek"/>
                                </div>
                    })
                }
            </div>
        );
    }
}

export default App;
