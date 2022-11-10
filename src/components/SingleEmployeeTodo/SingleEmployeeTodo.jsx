import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
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
                        paddingTop: '10%',
                        margin: 'auto auto',
                    }}
                >
                    <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        Employee - {id}{' '}
                    </h1>
                    <div style={{ maxWidth: '' }}>
                        {currentEmployeeTasks.length == 0 ? (
                            <div>
                                <p className='text-success'>No Task Here!!</p>
                                <Link to={'/assigntask'}>Assign task</Link>
                            </div>
                        ) : (
                            currentEmployeeTasks.map((task) => (
                                <SingleTodo
                                    task={task}
                                    key={task.id}
                                    profileId={id}
                                ></SingleTodo>
                            ))
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SingleEmployeeTodo;
