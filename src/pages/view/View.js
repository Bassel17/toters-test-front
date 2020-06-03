import React from 'react';
import './View.scss';

const View = (props) => {
    return (
        <div className="container">
        <div className = "view">
            <div className="view__info">
                <h3>{`${props.contact.first_name} ${props.contact.last_name}`}</h3>
                <p>{props.contact.phone_number}</p>
                <p>{props.contact.email}</p>
            </div>
            <div className="view__buttons">
                <button className="view__buttons__back">back</button>
                <button className="view__buttons__edit">edit</button>
                <button className="view__buttons__delete">delete</button>
            </div>
        </div>
        </div>
    );
}

export default View;