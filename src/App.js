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

  switchHandler = (newName) => {
    // DO NOT USE THIS -> state.persons[0].name = "test"
    this.setState( {
        persons: [
          {
            name: newName,
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'New Name',
          age: 23
        },
        {
          name: event.target.value,
          age: Math.floor(Math.random() * 30)
        },
        {
          name: "Ong",
          age: Math.floor(Math.random() * 30) 
        }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={() => this.switchHandler("JP Uncle")}>Switch it up
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchHandler.bind(this, "JP Grandpa")}
          changed={this.nameChangedHandler}
          > My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
