import React from 'react';
import './ContactCard.scss';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const history = useHistory();
    const change = () =>{
        history.push({
            pathname:"/contact",
            state:{
                contact: props.contact
            }
        });
    }

    const deleteContact = ()=>{
        props.deleteContact(props.contact.id);
    }

    return (
        <div className="ContactCardContainer">
            <div className="ContactCardContainer__info" onClick={change}>
                <h3 className="ContactCardContainer__info__name">{`${props.contact.first_name} ${props.contact.last_name}`}</h3>
                <p className="ContactCardContainer__info__number">{props.contact.phone_number}</p>
            </div>
            <div className="ContactCardContainer__buttons">
            <Link to={{
                pathname:'/edit',
                state:{
                    contact:props.contact
                }
            }}><button className="ContactCardContainer__buttons__edit">edit</button></Link>
                <Link to="/"><button className="ContactCardContainer__buttons__delete" onClick={deleteContact}>delete</button></Link>
            </div>
        </div>
    );
}

export default ContactCard;