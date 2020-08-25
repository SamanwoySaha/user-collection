import React from 'react';
import './Info.css';


const Info = (props) => {
    const total = props.salaryList.reduce((total, salary) => total + salary, 0);

    return (
        <div className="info">
            <h1>Count: {props.friendList.length}</h1>
            <h1>Total Salary: {total}</h1>
        </div>
    );
};

export default Info;