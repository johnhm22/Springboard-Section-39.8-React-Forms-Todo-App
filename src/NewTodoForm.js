import React, {useState} from 'react';


    const NewTodoForm = ({addTodo}) => {
        const INITIAL_STATE = {item: "",};



        const [formData, setFormData] = useState(INITIAL_STATE)

        const handleChange = e => {
            const {name, value} = e.target;
            setFormData(formData => ({
                ...formData,
                [name]: value
            }));
        }
    
        const handleSubmit = (e) => {
            const {todo} = formData;
            e.preventDefault();
            addTodo(todo);
            setFormData(INITIAL_STATE);
        }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo"></label>
            <input type="text" name="todo" placeholder="todo" id="todo" value={formData.todo} onChange={handleChange}></input>
        </form>


    )
}

export default NewTodoForm;