import React, { Component } from 'react';
/*import Radium, { StyleRoot } from 'radium';*/
import './App.css';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../ErrorBoundary/ErorBoundary';
import Cokpit from '../components/Cockpit/Cokpit';

class App extends Component {
  constructor(props){
  super(props);
  console.log('App.js constructor');
  }
  state = {
    persons: [
      {id: 'as1', name: 'Max', age: 28},
      {id: 'as2',name: 'Manu', age: 29},
      {id: 'as3',name: 'Stephanie', age: 26}
    ],
    showPerson: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDrivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('App.js componentDidMount');
  }

  nameChangeHandler =(event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
     //const persons = this.state.persons.slice();
      const persons = [...this.state.persons]
     persons.splice(personIndex,1);
     this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doseShow = this.state.showPerson;
    this.setState({showPerson: !doseShow});
  }

  render() {
    console.log('App.js render');
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
           persons={this.state.persons} 
           clicked={this.deletePersonHandler}
           changed={this.nameChangeHandler}/>
         </div>
      ); 
    }

    

    return (
      
        <div className="App">
          <Cokpit 
            title = {this.props.appTitle} 
            showPerson={this.state.showPerson}
            persons={this.state.persons}
            clicked={this.togglePersonHandler} />
          {persons} 
      </div>
      
      
    );
  }
}

export default App;
