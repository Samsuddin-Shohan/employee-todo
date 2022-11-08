import React from 'react';
import {useParams} from 'react-router-dom';
import NavBar from '../shared/NavBar';
const SingleEmployeeTodo = () => {
    const {id}=useParams();
    return (
        <div>
            <NavBar></NavBar>
            <h1>Employee - {id} </h1>
            
        </div>
    );
};

export default SingleEmployeeTodo;