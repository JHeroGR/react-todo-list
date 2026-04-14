import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
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
       
    }

    function updateTask(index, newTask) {

    }

    function moveTaskUp(index) {
    
    }

    function moveTaskDown(index) {
    
    }

    return(
        <div className="todo-list">
            <h1>Todo List</h1>

            <h3 className="alert-text">Please enter a task.</h3>

            <h3>Enter New Task</h3>
            <input type="text" placeholder='Enter a new task...' value={newTask} onChange={handleInputChange} />
            <input type="button" value="Add Task" onClick={addTask} />

            <h3>Tasks</h3>
            
            <ul>
                <li></li>
            </ul>
        </div>
    );
}

export default TodoList;
