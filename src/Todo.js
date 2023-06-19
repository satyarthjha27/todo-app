import React from 'react'
import useToggle from './HOOKS/useToggleState';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondary from "@material-ui/core/ListItemSecondaryAction";
import CheckBox from "@material-ui/core/Checkbox";
import EditingForm from './EditingForm';

export default function Todo(props) {
    const [isEditing,toggle] = useToggle();
  return (
    <ListItem style={{height:"64px"}}>
    {isEditing ? <EditingForm editTodo={props.editTodo} task={props.task} id={props.id} toggle={toggle} /> :
    <>
    <CheckBox checked={props.completed} onClick={() => props.toggleTodo(props.id) }/>
    <ListItemText style={{textDecoration: props.completed ? "line-through": "none"}}>
        {props.task}
    </ListItemText>
    <ListItemSecondary>
        <IconButton aria-label='Delete' onClick={()=> props.removeTodo(props.id)}>
            <DeleteIcon />
        </IconButton>
        <IconButton aria-label='Edit' onClick={toggle}>
            <EditIcon />
        </IconButton>
    </ListItemSecondary>
    </>
    }
    </ListItem>
  )
}
