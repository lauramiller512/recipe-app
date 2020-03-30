import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import { render } from '@testing-library/react';

class App extends Component {

  // This will call the API
  getRecipe = (e) => {
    // recipeName takes what the user submits in the form in Form
    const recipeName = e.target.elements.recipeName.value
    e.preventDefault(); 
    console.log(recipeName)
  };

 render() { 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Index</h1>
      </header>
      {/* getRecipe is the name of the prop; this.getRecipe refers to this app component, and the function within it */}
      {/* This is how we pass the getRecipe function to the Form component */}
      <Form getRecipe={this.getRecipe}/>
    </div>
  );
 };
};

export default App;
