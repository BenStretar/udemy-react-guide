import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css'

class App extends Component {
  //only works in Components that extend Components (defult)
  state = {
    persons: [
      { name: 'Ben', age: 25},
      { name: 'Auston', age: 26},
      { name: 'Greg', age: 33}
    ],
    otherState: 'other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Clicked')
    //DON'T DO THIS: this.state.persons[0].name = 'Benjamin';
    this.setState({persons: [
      { name: newName, age: 25},
      { name: 'Auston', age: 26},
      { name: 'Greg', age: 33}
    ]}) //updates state
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      { name: 'Ben', age: 25},
      { name: event.target.value, age: 26},
      { name: 'Greg', age: 32}
    ]})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div classNmae="App">
        <h1>Hi, I'm a React App</h1>
        <p>It's working!</p>
        <button onClick={()=>this.switchNameHandler('Benjamin!')}
        style={style}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Benny')}
          changed={this.nameChangeHandler} >My Hobbies: Cars</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>  
      </div>
    );
    // return React.createElement('div', {className: App}, React.createElement('h1', null, 'Working?'))
  }
}

export default App;

// Hooks version
// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';
// //statefull (smart or container) component

// const App = props => {
//   const [ personsState, setPersonsState] = useState({
//       persons: [
//         { name: 'Ben', age: 25},
//         { name: 'Auston', age: 26},
//         { name: 'Greg', age: 32}
//       ]
//     });

//     const [otherState, setOtherState] = useState('other value'); 

//     console.log(personsState, otherState);

//     const switchNameHandler = () => {
//       // console.log('Clicked')
//       //DON'T DO THIS: this.state.persons[0].name = 'Benjamin';
//       setPersonsState({
//         persons: [
//           { name: 'Benjamin', age: 25},
//           { name: 'Auston', age: 26},
//           { name: 'Greg', age: 33}
//         ]
//       }); //updates state (replacing old state)
//     };

//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>It's working!</p>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person 
//           name={personsState.persons[0].name} 
//           age={personsState.persons[0].age}/>
//         <Person 
//           name={personsState.persons[1].name} 
//           age={personsState.persons[1].age}>My Hobbies: Cars</Person>
//         <Person 
//           name={personsState.persons[2].name} 
//           age={personsState.persons[2].age}/>  
//       </div>
//     );
//     // return React.createElement('div', {className: App}, React.createElement('h1', null, 'Working?'))
//   }

// export default App;

