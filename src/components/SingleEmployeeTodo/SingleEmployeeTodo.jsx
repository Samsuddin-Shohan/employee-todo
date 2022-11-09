import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { EmployeeContext } from '../../App';
import NavBar from '../shared/NavBar';
import SingleTodo from '../SingleTodo/SingleTodo';
const SingleEmployeeTodo = () => {
    const { id } = useParams();
    const { employees, setEmployees } = useContext(EmployeeContext);
    const currentEmployeeTasks = employees[id - 1].tasks;

    // console.log(currentEmployeeTasks);
    return (
        <div>
            <NavBar></NavBar>
            <Container>
                <div
                    style={{
                        textAlign: 'center',
                        paddingTop: '10%',
                        marginBottom: '3rem',
                    }}
                >
                    <h1 style={{ marginBottom: '2rem' }}>Employee - {id} </h1>
                    <div>
                        {currentEmployeeTasks.length == 0
                            ? 'No task here'
                            : currentEmployeeTasks.map((task) => (
                                 <SingleTodo task={task} key={task.id} profileId={id}>

                                 </SingleTodo>
                              ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SingleEmployeeTodo;
