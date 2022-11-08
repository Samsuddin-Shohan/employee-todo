import React, { useCallback, useContext } from 'react';
import NavBar from '../../components/shared/NavBar';
import Container from 'react-bootstrap/Container';
import { EmployeeContext } from '../../App';
import {Link} from 'react-router-dom';

const Todos = () => {
  const {employees,setEmpoloyeees} = useContext(EmployeeContext)
  return (
        <div>
            <NavBar></NavBar>
           <Container>
            <h1>Click for Individual Todo</h1>
            <ul>
      {
        employees.map(employee =><Link to={`/todos/${employee.id}`}> <li>{employee.name}</li></Link>)
      }
    </ul>
           </Container>
        </div>
    );
};

export default Todos;