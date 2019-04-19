import React from 'react';

//this only works because you are returning one element (object) also because its stateless
// avoid using this cleaner format for more complex compnents

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <button> Get Weather </button>
    </form>
);

export default Form;