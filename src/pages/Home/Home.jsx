import React, { useContext, useState } from 'react';
import Navbar from '../../components/shared/NavBar';
import NavBar from '../../components/shared/NavBar';
import Container from 'react-bootstrap/Container';
import { EmployeeContext } from '../../App';
import { Link } from 'react-router-dom';

const Home = () => {
    const { employees, setEmpoloyeees } = useContext(EmployeeContext);
    return (
        <div>
            <NavBar></NavBar>
            <div
                style={{
                    paddingTop: '10%',
                    marginBottom: '3rem',
                }}
            >
                <Container>
                    <h1 style={{ textAlign: 'center' }}>Employee Todo List</h1>
                    <h3>List of All Employees</h3>

                    <ul>
                        {employees.map((employee) => (
                            <Link to={`/profile/${employee.id}`}>
                                {' '}
                                <li>{employee.name}</li>
                            </Link>
                        ))}
                    </ul>
                </Container>
            </div>
        </div>
    );
};

export default Home;
