import React from 'react';

//stateless component
// props is calling getRecipe which I added to Form in app
const Form = props => (
    <form onSubmit={props.getRecipe}>
        <input type="text" />
        <button>Search</button>
    </form>
);

export default Form