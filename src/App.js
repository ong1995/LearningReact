import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        name: "Justin",
        age: Math.floor(Math.random() * 30)
      },
      {
        name: "Paul",
        age: Math.floor(Math.random() * 30)
      },
      {
        name: "Ong",
        age: Math.floor(Math.random() * 30)
      },
    ],
    OtherState: 'Other state value'
  }

  switchHandler = () => {
    // DO NOT USE THIS -> state.persons[0].name = "test"
    this.setState( {
        persons: [
          {
            name: "JP Boy",
            age: 23
          },
          {
            name: "Paul",
            age: Math.floor(Math.random() * 30)
          },
          {
            name: "Ong",
            age: Math.floor(Math.random() * 30)
          }
        ]
      } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchHandler}>Switch it up</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <p>This is really working!</p>
      </div>
    );
  }
}

export default App;
