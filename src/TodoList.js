import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import {v4 as uuid} from 'uuid';

const TodoList = () => {
    const INITIAL_STATE = [];

    const [todos, setTodos] = useState(INITIAL_STATE)

    const addTodo = (todo) => {
        setTodos(todos => [...todos, {id: uuid(), todo}])
    }


    const deleteTodo = (id) => {
        setTodos(todos.filter(t => id !==t.id ))
    }


    return (
        <div>
            <h3>Todo List</h3>
            <div>
                {todos.map(({id, todo}) => <Todo id={id} todo={todo} deleteTodo={deleteTodo}/>)}
            </div>
            <NewTodoForm addTodo={addTodo}/>
        </div>
    )


}

export default TodoList;