import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState(['feed the dog', 'feed the cat', 'feed the bat']);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function showAlert() {
        // use css to change the alert to display inline block
    }

    function addTask() {
        console.log('Adding task:', newTask);
        if (newTask.trim() !== '') {
            setTodos([...todos, newTask]);
            setNewTask('');
        } else {
            showAlert();
        }

    }

    function deleteTask(index) {
       const updatedTodos = todos.filter((_, i) => i !== index);
       setTodos(updatedTodos);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTodos = [...todos];
            [updatedTodos[index], updatedTodos[index - 1]] = [updatedTodos[index - 1], updatedTodos[index]];
            setTodos(updatedTodos);
        }
    }

    function moveTaskDown(index) {
        if (index < todos.length - 1) {
            const updatedTodos = [...todos];
            [updatedTodos[index], updatedTodos[index + 1]] = [updatedTodos[index + 1], updatedTodos[index]];
            setTodos(updatedTodos);

        }
    }

    return(
        <div className="todo-list">
            <h1>Todo List</h1>

            <h3 className="alert-text">Please enter a task.</h3>

            <h3>Enter New Task</h3>
            <input type="text" 
                   placeholder='Enter a new task...' 
                   value={newTask} 
                   onChange={handleInputChange} />

            <button className="add-button"
                    onClick={addTask}>Add</button>
            <h3>Tasks</h3>
            
            <ol>
                {todos.map((todo, index) =>
                    <li key={index}>
                        <span className='text'>{todo}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='move-button' onClick={() =>moveTaskUp(index)}>👆</button>
                        <button className='move-button' onClick={() =>moveTaskDown(index)}>👇</button>
                    </li>
                )}
            </ol>
           
        </div>
    );
}

export default TodoList;
