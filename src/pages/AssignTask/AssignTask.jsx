import React, { useContext, useState } from 'react';
import NavBar from '../../components/shared/NavBar';
import Container from 'react-bootstrap/Container';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { EmployeeContext } from '../../App';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AssignTask = () => {
    const [value, setValue] = useState('');
    const [dropdownTitle, setDropdownTitle] = useState('Select Employee');
    const [inputValue, setIntputValue] = useState('');
    const { employees, setEmployees } = useContext(EmployeeContext);
    const handleSelect = (e) => {
        // console.log(e);
        setDropdownTitle(`employee ${e}`);
        setValue(e);
    };
    const handleCreateTodo = (e) => {
        e.preventDefault();
        let newEmployees = [...employees];
        console.log(newEmployees);
        const taskLength = newEmployees[value - 1].tasks.length;
        console.log(taskLength);

        newEmployees[value - 1].tasks.push({
            id: uuidv4(),
            title: inputValue,
            isCompleted: false,
        });
        // alert('todo created');
        setIntputValue('');
        setEmployees(newEmployees);
    };
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
                    <h1 style={{ marginBottom: '2rem' }}>Assign Task here</h1>

                    <DropdownButton
                        alignRight
                        title={dropdownTitle}
                        id='dropdown-menu-align-right'
                        onSelect={handleSelect}
                    >
                        {employees.map((employee) => (
                            <Dropdown.Item eventKey={employee.id}>
                                {employee.name}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </div>
                {dropdownTitle == 'Select Employee' ? (
                    ''
                ) : (
                    <div style={{ textAlign: 'left' }}>
                        <h4 style={{ marginBottom: '16px' }}>
                            Create todo form {`Employee ${value}`}
                        </h4>
                        <form onSubmit={handleCreateTodo}>
                            <input
                                type='text'
                                placeholder='Enter todos'
                                value={inputValue}
                                onChange={(e) => setIntputValue(e.target.value)}
                            />
                            <button
                                className='btn btn-success ms-1 rounded-1 p-0 px-2 '
                                onClick={handleCreateTodo}
                                type='submit'
                            >
                                create
                            </button>
                        </form>
                        <Link
                            style={{
                                display: 'block',
                                marginTop: '1rem',
                                color: 'green',
                                textDecoration: 'none',
                            }}
                            to={`/todos/${value}`}
                        >
                            {' '}
                            See Todo of Employee {value}{' '}
                        </Link>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default AssignTask;
