import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    const {email, name, phone, picture, login} = props.user;
    const handleAddFriend = props.handleAddFriend;

    return (
        <div className="user">
            <img className="user-image" src={picture.large} alt=""/>
            <h3 className="user-fullname">{name.title + ' ' + name.first + ' ' + name.last}</h3>
            <h5 className="user-username">@ {login.username}</h5>
            <p><strong><FontAwesomeIcon className="icon" icon={faPhoneAlt} /></strong>  {phone}</p>
            <p><strong><FontAwesomeIcon className="icon" icon={faEnvelope} /></strong>  {email}</p>
            <p><strong>Salary: </strong>{props.salary.toLocaleString()}</p>
            <button onClick={() => handleAddFriend(props.user, props.salary)} className="user-add-btn">
                <FontAwesomeIcon className="icon" icon={faPlus} /> 
                Add Friend
            </button>
        </div>
    );
};

export default User;