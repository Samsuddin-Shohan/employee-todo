import React, { useCallback, useContext } from 'react';
import NavBar from '../../components/shared/NavBar';
import Container from 'react-bootstrap/Container';
import { EmployeeContext } from '../../App';
import { Link } from 'react-router-dom';

const Todos = () => {
    const { employees, setEmpoloyeees } = useContext(EmployeeContext);
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
                    <h1 style={{ marginBottom: '2rem' }}>
                        Click for Individual Todo
                    </h1>
                    <ul style={{ textAlign: 'left' }}>
                        {employees.map((employee) => (
                            <Link to={`/todos/${employee.id}`}>
                                {' '}
                                <li>{employee.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Todos;
