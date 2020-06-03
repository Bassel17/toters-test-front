import React from 'react';
import './View.scss';
import {Link} from "react-router-dom";
import {
    useLocation
} from "react-router-dom";

const View = () => {
    const location = useLocation();
    const contact = location.state.contact;

    return (
        <div className="container">
        <div className = "view">
            <div className="view__info">
                <h3>{`${contact.first_name} ${contact.last_name}`}</h3>
                <p>{contact.phone_number}</p>
                <p>{contact.email}</p>
            </div>
            <div className="view__buttons">
            <Link to="/"><button className="view__buttons__back">back</button></Link>
            <Link to={{
                pathname:'/edit',
                state:{
                    contact:contact
                }
            }} ><button className="view__buttons__edit">edit</button></Link>
            <Link to="/"><button className="view__buttons__delete">delete</button></Link>
            </div>
        </div>
        </div>
    );
}

export default View;