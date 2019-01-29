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
    otherState: 'Other state value',
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    // const doesShow = ;
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }    
    let persons = null;
    if(this.state.showPersons)
    {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              click={() => this.deletePersonHandler(person)}
              name={person.name}
              age={person.age}/>
          })}
        </div> 
      );
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch it up
        </button>
        { persons}
      </div>
    );
  }
}

export default App;
