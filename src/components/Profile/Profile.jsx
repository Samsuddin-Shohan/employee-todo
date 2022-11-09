import React, { useContext, useEffect } from 'react';
import NavBar from '../shared/NavBar';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { EmployeeContext } from '../../App';
import { Table } from 'react-bootstrap';

const Profile = () => {
    const { id } = useParams();
    const { employees, setEmployees } = useContext(EmployeeContext);
    const currentEmployee = employees.find((employee) => id == employee.id);
    useEffect(() => {}, [employees]);
    // console.log(employees,id,currentEmployee);
    const handleDeleteProperties = (property) => {
        let newEmployees = [...employees];
        newEmployees[id - 1][property] = '';
        setEmployees(newEmployees);
    };

    return (
        <div>
            <NavBar></NavBar>
            <Container>
                <h1 style={{ textAlign: 'center', paddingTop: '20%' }}>
                    Profile-Employee {id}
                </h1>

                <Table striped bordered hover>
                    <tbody style={{ textAlign: 'center' }}>
                        <tr>
                            <td>ID</td>
                            <td>{currentEmployee.id}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{currentEmployee.name}</td>
                            {/* <td>   <button type="button" class="btn btn-outline-danger" onClick={()=>handleDeleteProperties('name')}>Delete</button></td> */}
                        </tr>
                        <tr>
                            <td>Designation</td>

                            <td>{currentEmployee.designation}</td>
                            <td>
                                {' '}
                                <button
                                    type='button'
                                    class='btn btn-outline-danger'
                                    onClick={() =>
                                        handleDeleteProperties('designation')
                                    }
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>

                            <td>{currentEmployee.email}</td>
                            <td>
                                {' '}
                                <button
                                    type='button'
                                    class='btn btn-outline-danger'
                                    onClick={() =>
                                        handleDeleteProperties('email')
                                    }
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>phone</td>

                            <td>{currentEmployee.phone}</td>
                            <td>
                                {' '}
                                <button
                                    type='button'
                                    class='btn btn-outline-danger'
                                    onClick={() =>
                                        handleDeleteProperties('phone')
                                    }
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default Profile;
