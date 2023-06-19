import React from 'react'
import TextField from "@material-ui/core/TextField";
import useInputState from './HOOKS/useInputState';

export default function EditingForm(props) {
    const [value,handleChange,reset] = useInputState(props.task)
  return (
    <form onSubmit={ e =>{
        e.preventDefault();
        props.editTodo(props.id,value);
        reset();
        props.toggle();
    }}>
    <TextField
    value={value} 
    onChange={handleChange} />
    </form>
  )
}
