import React,{useState,useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import TodoList from "./TodoList";
import Grid from "@material-ui/core/Grid";
import TodoForm from "./TodoForm";
import { v4 as uuid } from 'uuid';


function  TodoApp(){
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
    // const initialTodos= [
    //     {id:1,task:"Clean Fishtank", completed:false},
    //     {id:2,task:"Car Wash", completed:true},
    //     {id:3,task:"Grow Beard", completed:false},
    // ]
    const [todos,setTodos] = useState(initialTodos);
    useEffect(()=>{
        window.localStorage.setItem("todos",JSON.stringify(todos));
    },[todos]);

    const addTodos = newTodoText =>{
        setTodos([...todos,{id:uuid(),task:newTodoText, completed:false }]);
    }
    const removeTodo = todoId =>{
        const updateTodo = todos.filter(todo => todo.id!== todoId);
        setTodos(updateTodo);
    }
    const toggleTodo = todoId =>{
        const updateTodo = todos.map(todo => 
            todo.id === todoId ? {...todo,completed:!todo.completed}: todo
        );
        setTodos(updateTodo);
    }

    const editTodo = (todoId, newtask) =>{
        const updateTodo = todos.map(todo => 
            todo.id === todoId ? {...todo,task:newtask}: todo
        );
        setTodos(updateTodo);
    }
    return(
        <Paper style={ {
            padding:0,
            margin:0,
            backgroundColor: "#fafafa",
            height:0
        }} elevation={0}>
        <AppBar color="primary" position="static" style={{height:"64px"}}>
            <ToolBar>
                <Typography color="inherit">TODOS WITH HOOKS</Typography>
            </ToolBar>
        </AppBar>
        <Grid container justifyContent="center" style={{marginTop: "2rem"}}>
        <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodos={addTodos} />
            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
        </Grid>
        </Grid>
        </Paper>
    )
}

export default TodoApp;