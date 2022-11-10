import React, { useContext, useState } from 'react';
import NavBar from '../../components/shared/NavBar';
import Container from 'react-bootstrap/Container';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { EmployeeContext } from '../../App';

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
        let newEmployees = [...employees];
        console.log(newEmployees);
        const taskLength = newEmployees[value - 1].tasks.length;
        console.log(taskLength);

        newEmployees[value - 1].tasks.push({
            id: taskLength + 1,
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
                        <input
                            type='text'
                            placeholder='Enter todos'
                            value={inputValue}
                            onChange={(e) => setIntputValue(e.target.value)}
                        />
                        <button
                            className='btn btn-success ms-1 rounded-1 p-0 px-2 '
                            onClick={handleCreateTodo}
                        >
                            create
                        </button>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default AssignTask;
