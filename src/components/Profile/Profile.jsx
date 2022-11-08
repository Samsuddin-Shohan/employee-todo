import React, { useContext } from 'react';
import NavBar from '../shared/NavBar';
import {useParams} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { EmployeeContext } from '../../App';
import { Table } from 'react-bootstrap';


const Profile = () => {
    const {id}=useParams();
    const employees = useContext(EmployeeContext);
    const currentEmployee = employees.find(employee => id==employee.id);
    console.log(employees,id,currentEmployee);

    return (
        <div>
            <NavBar></NavBar>
           <Container>
           <h1 style={{textAlign:'center',paddingTop:'20%'}}>Profile-Employee {id}</h1>
            
            <Table striped bordered hover>
     
      <tbody style={{textAlign:'center'}}>
        <tr>
          <td>ID</td>
          <td>{currentEmployee.id}</td>
          
         
        </tr>
        <tr>
          <td>Name</td>
          <td>{currentEmployee.name}</td>
          <td>   <button type="button" class="btn btn-outline-danger">Delete</button></td>
         
        </tr>
        <tr>
          <td>Designation</td>
         
          <td>{currentEmployee.designation}</td>
          <td>   <button type="button" class="btn btn-outline-danger">Delete</button></td>
        </tr>
        <tr>
          <td>Email</td>
         
          <td>{currentEmployee.email}</td>
          <td>   <button type="button" class="btn btn-outline-danger">Delete</button></td>
        </tr>
        <tr>
          <td>3</td>
         
          <td>{currentEmployee.phone}</td>
          <td>   <button type="button" class="btn btn-outline-danger">Delete</button></td>
        </tr>
      </tbody>
    </Table>
           </Container>
            
        </div>
    );
};

export default Profile;
