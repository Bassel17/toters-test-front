import React, {useState} from 'react';
import './ContactForm.scss';
import { Link } from "react-router-dom";

const ContactForm = (props) => {

    const [firstName,setFirstName] = useState(props.firstName);
    const [lastName,setLastName] = useState(props.lastName);
    const [phoneNumber,setPhoneNumber] = useState(props.phoneNumber);
    const [email,setEmail] = useState(props.email);

    const changeFirstName = (event)=>{
        setFirstName(event.target.value);
    }

    const changeLastName = (event)=>{
        setLastName(event.target.value);
    }

    const changePhoneNumber = (event)=>{
        setPhoneNumber(event.target.value);
    }

    const changeEmail = (event)=>{
        setEmail(event.target.value);
    }

    const saveContact = () => {
        if (firstName !=="" && phoneNumber !==""){
            props.saveContact({
                id:0,
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNumber,
                email:email
            });
        }
    }
    
    return (
        <form className="ContactForm">
            <div className="ContactForm__info">
                <label className="ContactForm__info__label">First</label>
                <input type="text" value={firstName} onChange={changeFirstName} className="ContactForm__info__input" required/>
            </div>

            <div className="ContactForm__info">
                <label className="ContactForm__info__label">Last</label>
                <input type="text" value={lastName} onChange={changeLastName} className="ContactForm__info__input"/>
            </div>

            <div className="ContactForm__info">
                <label className="ContactForm__info__label">Phone</label>
                <input type="text" value={phoneNumber} onChange={changePhoneNumber} className="ContactForm__info__input" required/>
            </div>

            <div className="ContactForm__info">
                <label className="ContactForm__info__label">Email</label>
                <input type="text" value={email} onChange={changeEmail} className="ContactForm__info__input"/>
            </div>
            
            <div className="ContactForm__info">
                <div className="ContactForm__info__buttons">
                    <Link to="/"><button className="ContactForm__info__buttons__cancel">cancel</button></Link>
                    <Link to="/"><button className="ContactForm__info__buttons__edit" onClick={saveContact}>save</button></Link>
                </div>
            </div>
        </form>
    );

}

export default ContactForm;