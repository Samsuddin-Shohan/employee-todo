import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../../App';
import './SingleTodo.css';

const SingleTodo = ({ task, profileId }) => {
    const [isChecked, setIsChecked] = useState(task.isCompleted);
    const { employees, setEmpoloyeees } = useContext(EmployeeContext);
    const [deleted, setDeleted] = useState(false);
    const currentProfile = employees.find(
        (employee) => employee.id == profileId
    );
    let currentProfileTasks = currentProfile.tasks;
    // console.log(currentProfile, currentProfileTasks);
    const handleChange = (id) => {
        const newEmployees = [...employees];

        let currentTaskIndex = currentProfile.tasks.findIndex(
            (task) => task.id == id
        );
        if (newEmployees[profileId - 1].tasks[currentTaskIndex].isCompleted) {
            newEmployees[profileId - 1].tasks[
                currentTaskIndex
            ].isCompleted = false;
        } else {
            newEmployees[profileId - 1].tasks[
                currentTaskIndex
            ].isCompleted = true;
        }
        setIsChecked(!isChecked);
        setEmpoloyeees(newEmployees);
    };
    const handleDelete = (id) => {
        let newEmployees = [...employees];

        currentProfileTasks = currentProfileTasks.filter(
            (task) => task.id != id
        );
        newEmployees[profileId - 1].tasks = currentProfileTasks;
        // console.log(newEmployees);
        alert('Todo delete');
        setDeleted(!deleted);
        console.log('task deleted');

        setEmpoloyeees(newEmployees);
    };
    return (
        <div>
            <div style={{ marginBottom: '1rem' }}>
                <input
                    type='checkbox'
                    defaultChecked={isChecked}
                    onChange={() => handleChange(task.id)}
                />

                <span
                    style={{ marginLeft: '1rem', fontSize: '2rem' }}
                    className={isChecked ? 'title-style' : ''}
                >
                    {task.title}
                </span>
                <span style={{ marginLeft: '1rem' }}>
                    <button
                        className='btn btn-danger btn-sm'
                        onClick={() => handleDelete(task.id)}
                    >
                        Delete
                    </button>
                </span>
            </div>
        </div>
    );
};

export default SingleTodo;
