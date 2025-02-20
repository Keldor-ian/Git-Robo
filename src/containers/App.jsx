import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            searchField: ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(user => this.setState({ users: user }))
    }

    handleDisplayEvent = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const { users, searchField } = this.state;

        const filterRobots = users.filter(user => { // used to be this.state.users
            return user.name.toLowerCase().includes(searchField);// used to be this.state.searchField
        })

        // BETTER WAY OF DOING THE BELOW

        // return !user.length ? return ({ <p>Loading...</p> }) : (the else statement)

        if (!users.length) { // used to be this.state.users.length === 0
            return (
                <p>Loading...</p>
            )
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Robots!!!</h1>
                    <SearchBox searchChange={this.handleDisplayEvent} />
                    <Scroll>
                        <CardList users={filterRobots} />
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;

