import React from "react";

const Todo = ({id, todo, deleteTodo}) => {   

    const handleDelete = () => {
        deleteTodo(id);
    }


    return (
        <>
        <div data-id = {id}>
            <ul>
                <li>{todo}</li>
            </ul>
        </div>
         <button onClick={handleDelete}>X</button>
         </>
    )
}

export default Todo;