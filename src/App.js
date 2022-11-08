import logo from './logo.svg';
import './App.css';
import {  createContext, useState } from 'react';
import { Routes, Route, Link ,BrowserRouter} from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import AssignTask from './pages/AssignTask/AssignTask';
import Todos from './pages/Todos/Todos';
import Profile from './components/Profile/Profile';
import SingleEmployeeTodo from './components/SingleEmployeeTodo/SingleEmployeeTodo';

export const EmployeeContext = createContext({employees:employees,setEmpoloyeees:() => {}});

function App() {

  const [employees,setEmpoloyeees]=useState([
    {
      id:1,
      name:'Employee 1',
      designation:'Software Engineer',
      email:'employee1@gmail.com',
      phone:'0177777777777',
      tasks:[]

    },
    {
      id:2,
      name:'Employee 2',
      Designationa:'Software Engineer',
      email:'employee2@gmail.com',
      phone:'0177777777777',
      tasks:[]

    },
    {
      id:3,
      name:'Employee 3',
      Designationa:'Software Engineer',
      email:'employee3@gmail.com',
      phone:'0177777777777',
      tasks:[]

    },
    {
      id:4,
      name:'Employee 4',
      Designationa:'Software Engineer',
      email:'employee4@gmail.com',
      phone:'0177777777777',
      tasks:[]

    },
    {
      id:5,
      name:'Employee 5',
      Designationa:'Software Engineer',
      email:'employee1@gmail.com',
      phone:'0177777777777',
      tasks:[]

    },
  ])
  const value = {employees,setEmpoloyeees};


  return (
    <EmployeeContext.Provider value = {value}>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Home></Home>}></Route>
          <Route path='assigntask'element={<AssignTask></AssignTask>}></Route>
          <Route path='todos'element={<Todos></Todos>}></Route>
          <Route path='/profile/:id'element={<Profile></Profile>}></Route>
          <Route path='/todos/:id'element={<SingleEmployeeTodo></SingleEmployeeTodo>}></Route>
        </Routes>
    
    </BrowserRouter>
    </EmployeeContext.Provider>
   
  
  );
}

export default App;
