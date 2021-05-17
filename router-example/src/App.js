import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ReactTable from 'react-table';
import About from './About';

class App extends React.Component {
  state = {
    username: '',
    password: ''
  }

  usernameHandler = (event) => {
    console.log(event.target.value);
    this.setState({username: event.target.value});
  }

  passwordHandler = (event) => {
    console.log(event.target.value);
    this.setState({password: event.target.value});
  }

  formSubmitHandler = () =>{
    
  }

 

  render() {
    const data = [{
      name: 'Sagar',
      age: 28
    },
    {
      name: 'payal',
      age: 28
    },
    {  
      name: 'Dhoni',  
      age: 37  
      }
  ];

  const columns = [{  
    Header: 'Name',  
    accessor: 'name'  
    },{  
    Header: 'Age',  
    accessor: 'age'  
    }];

   

    return (
      <div>
        <h1> Hello I am at home</h1>
        
        
      </div>
    );
  }

}
  

export default App;
