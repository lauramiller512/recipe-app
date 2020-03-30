import React from 'react';

//stateless component
// props is calling getRecipe which I added to Form in app
const Form = props => (
    <form onSubmit={props.getRecipe}>
        <input 
        type="text"
        // giving it a name means we can reference it in the getRecipe function in App
        name="recipeName"
         />
        <button>Search</button>
    </form>
);

export default Form