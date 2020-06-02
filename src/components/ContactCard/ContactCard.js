import React from 'react';
import './ContactCard.scss';

const ContactCard = (props) => {
    return (
        <div className="ContactCardContainer">
            <div className="ContactCardContainer__info">
                <h3 className="ContactCardContainer__info__name">{`${props.first_name} ${props.last_name}`}</h3>
                <p className="ContactCardContainer__info__number">{props.phone_number}</p>
            </div>
            <div className="ContactCardContainer__buttons">
                <button className="ContactCardContainer__buttons__edit">edit</button>
                <button className="ContactCardContainer__buttons__delete">delete</button>
            </div>
        </div>
    );
}

export default ContactCard;