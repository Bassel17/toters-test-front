import React from 'react';
import './Edit.scss';
import ContactForm from '../../components/ContactForm/ContactForm';
import {
    useLocation
  } from "react-router-dom";
  
const Edit = () => {
    const location = useLocation();
    const contact = location.state?.contact;
    return(
        <div className = "edit">
            <ContactForm 
                firstName ={contact?.first_name !== undefined ? contact.first_name : ""}
                lastName = {contact?.last_name !== undefined ? contact.last_name : ""}
                phoneNumber = {contact?.phone_number !== undefined ? contact.phone_number : ""}
                email = {contact?.email !== undefined ? contact.email : ""}
            />
        </div>
    )
}

export default Edit;