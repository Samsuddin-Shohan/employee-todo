import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../shared/NavBar';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { EmployeeContext } from '../../App';
import { Table } from 'react-bootstrap';
import './profile.css';

const Profile = () => {
    const { id } = useParams();
    const { employees, setEmpoloyeees } = useContext(EmployeeContext);
    const currentEmployee = employees.find((employee) => id == employee.id);

    const [designationDisable, setDesignationDisable] = useState(false);
    const [emailDisable, setEmailDisable] = useState(false);
    const [phoneDisable, setPhoneDisabe] = useState(false);
    const [nameEditable, setNameEditable] = useState(false);
    const [designationationEditable, setDesignationEditable] = useState(false);
    const [emailEditable, setEmailEditable] = useState(false);
    const [phoneEditable, setPhoneEditable] = useState(false);
    const [editedName, setEditedName] = useState(currentEmployee.name);
    const [editedDesignation, setEditedDesignation] = useState(
        currentEmployee.designation
    );
    const [editedEmail, setEditedEmail] = useState(currentEmployee.email);
    const [editedPhone, setEditedPhone] = useState(currentEmployee.phone);

    useEffect(() => {
        currentEmployee.designation
            ? setDesignationDisable(false)
            : setDesignationDisable(true);
        currentEmployee.email ? setEmailDisable(false) : setEmailDisable(true);
        currentEmployee.phone ? setPhoneDisabe(false) : setPhoneDisabe(true);
    }, [employees]);
    const handleDeleteProperties = (property) => {
        let newEmployees = [...employees];
        newEmployees[id - 1][property] = '';
        alert('Deleted');
        if (property == 'phone') {
            setPhoneDisabe(true);
        } else if (property == 'email') {
            setEmailDisable(true);
        } else {
            setDesignationDisable(true);
        }
        setEmpoloyeees(newEmployees);
    };
    const handleEditProperties = (property) => {
        property == 'name' ? setNameEditable(true) : setNameEditable(false);
        property == 'designation'
            ? setDesignationEditable(true)
            : setDesignationEditable(false);
        property == 'email' ? setEmailEditable(true) : setEmailEditable(false);
        property == 'phone' ? setPhoneEditable(true) : setPhoneEditable(false);
    };
    const handleSaveProperties = (property) => {
        property == 'name' ? setNameEditable(false) : setNameEditable(true);
        property == 'designation'
            ? setDesignationEditable(false)
            : setDesignationEditable(true);
        property == 'email' ? setEmailEditable(false) : setEmailEditable(true);
        property == 'phone' ? setPhoneEditable(false) : setPhoneEditable(true);
        // console.log(currentEmployee);
        let newEmployees = [...employees];

        property == 'name'
            ? (newEmployees[id - 1].name = editedName)
            : (newEmployees[id - 1].name = newEmployees[id - 1].name);
        property == 'designation'
            ? (newEmployees[id - 1].designation = editedDesignation)
            : (newEmployees[id - 1].designation =
                  newEmployees[id - 1].designation);
        property == 'email'
            ? (newEmployees[id - 1].email = editedEmail)
            : (newEmployees[id - 1].email = newEmployees[id - 1].email);
        property == 'phone'
            ? (newEmployees[id - 1].phone = editedPhone)
            : (newEmployees[id - 1].phone = newEmployees[id - 1].phone);
        setEmpoloyeees(newEmployees);
        console.log(employees);
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
                            <td>
                                {' '}
                                <button
                                    type='button'
                                    class='btn btn-outline-danger outline-0 border-0'
                                    disabled
                                >
                                    Not Applicable
                                </button>
                            </td>
                            <td>
                                {' '}
                                <button
                                    type='button'
                                    class='btn btn-outline-danger outline-0 border-0'
                                    disabled
                                >
                                    Not Applicable
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td
                                contentEditable={nameEditable}
                                className={nameEditable ? 'edit' : ''}
                                onInput={(e) => {
                                    // console.log(e.currentTarget.textContent);
                                    setEditedName(e.currentTarget.textContent);
                                }}

                                // onBlur={setNameEditable(false)}
                                // onBlur={setEmailEditable(false)}
                            >
                                {currentEmployee.name}
                            </td>
                            <td>
                                {' '}
                                <button
                                    type='button'
                                    class='btn btn-outline-danger outline-0 border-0'
                                    disabled
                                >
                                    Not Applicable
                                </button>
                            </td>
                            <td>
                                {' '}
                                <button
                                    type='button'
                                    class='btn btn-warning'
                                    onClick={() => handleEditProperties('name')}
                                >
                                    Edit
                                </button>
                                <button
                                    type='button'
                                    class='btn btn-outline-primary ms-3'
                                    // disabled={designationDisable}
                                    onClick={() => handleSaveProperties('name')}
                                >
                                    save
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Designation</td>

                            <td
                                contentEditable={designationationEditable}
                                className={
                                    designationationEditable ? 'edit' : ''
                                }
                                onInput={(e) => {
                                    console.log(e.currentTarget.textContent);
                                    setEditedDesignation(
                                        e.currentTarget.textContent
                                    );
                                }}

                                // onBlur={setNameEditable(false)}
                                // onBlur={setEmailEditable(false)}
                            >
                                {currentEmployee.designation}
                            </td>
                            <td>
                                {' '}
                                <button
                                    type='button'
                                    class='btn btn-outline-danger'
                                    disabled={designationDisable}
                                    onClick={() =>
                                        handleDeleteProperties('designation')
                                    }
                                >
                                    Delete
                                </button>
                            </td>
                            <td>
                                {' '}
                                <button
                                    type='button'
                                    class='btn btn-warning'
                                    disabled={designationDisable}
                                    onClick={() =>
                                        handleEditProperties('designation')
                                    }
                                >
                                    Edit
                                </button>
                                <button
                                    type='button'
                                    disabled={designationDisable}
                                    class='btn btn-outline-primary ms-3'
                                    // disabled={designationDisable}
                                    onClick={() =>
                                        handleSaveProperties('designation')
                                    }
                                >
                                    save
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>

                            <td
                                contentEditable={emailEditable}
                                className={emailEditable ? 'edit' : ''}
                                onInput={(e) => {
                                    console.log(e.currentTarget.textContent);
                                    setEditedEmail(e.currentTarget.textContent);
                                }}

                                // onBlur={setNameEditable(false)}
                                // onBlur={setEmailEditable(false)}
                            >
                                {currentEmployee.email}
                            </td>
                            <td>
                                {' '}
                                <button
                                    type='button'
                                    class='btn btn-outline-danger'
                                    disabled={emailDisable}
                                    onClick={() =>
                                        handleDeleteProperties('email')
                                    }
                                >
                                    Delete
                                </button>
                            </td>
                            <td>
                                {' '}
                                <button
                                    type='button'
                                    class='btn btn-warning'
                                    disabled={emailDisable}
                                    onClick={() =>
                                        handleEditProperties('email')
                                    }
                                >
                                    Edit
                                </button>
                                <button
                                    type='button'
                                    disabled={emailDisable}
                                    class='btn btn-outline-primary ms-3'
                                    // disabled={designationDisable}
                                    onClick={() =>
                                        handleSaveProperties('email')
                                    }
                                >
                                    save
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>phone</td>

                            <td
                                contentEditable={phoneEditable}
                                className={phoneEditable ? 'edit' : ''}
                                onInput={(e) => {
                                    console.log(e.currentTarget.textContent);
                                    setEditedPhone(e.currentTarget.textContent);
                                }}

                                // onBlur={setNameEditable(false)}
                                // onBlur={setEmailEditable(false)}
                            >
                                {currentEmployee.phone}
                            </td>
                            <td>
                                {' '}
                                <button
                                    type='button'
                                    class='btn btn-outline-danger'
                                    disabled={phoneDisable}
                                    onClick={() =>
                                        handleDeleteProperties('phone')
                                    }
                                >
                                    Delete
                                </button>
                            </td>
                            <td>
                                {' '}
                                <button
                                    type='button'
                                    class='btn btn-warning'
                                    disabled={phoneDisable}
                                    onClick={() =>
                                        handleEditProperties('phone')
                                    }
                                >
                                    Edit
                                </button>
                                <button
                                    type='button'
                                    disabled={phoneDisable}
                                    class='btn btn-outline-primary ms-3'
                                    // disabled={designationDisable}
                                    onClick={() =>
                                        handleSaveProperties('phone')
                                    }
                                >
                                    save
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
