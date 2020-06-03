import React from 'react';
import './Edit.scss';
import ContactForm from '../../components/ContactForm/ContactForm';

const Edit = (props) => {
    return(
        <div className = "edit">
            <ContactForm 
                firstName ={props.contact.first_name}
                lastName = {props.contact.last_name}
                phoneNumber = {props.contact.phone_number}
                email = {props.contact.email}
            />
        </div>
    )
}

export default Edit;