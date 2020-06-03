import React, {useState} from 'react';
import './ContactForm.scss';

const ContactForm = (props) => {

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [email,setEmail] = useState("");

    const changeFirstName = (event)=>{
        setFirstName(event.value);
    }

    const changeLastName = (event)=>{
        setLastName(event.value);
    }

    const changePhoneNumber = (event)=>{
        setPhoneNumber(event.value);
    }

    const changeEmail = (event)=>{
        setEmail(event.value);
    }
    
    return (
        <form className="ContactForm">
            <div className="ContactForm__info">
                <label className="ContactForm__info__label">First</label>
                <input value={firstName} onChange={changeFirstName} className="ContactForm__info__input" required/>
            </div>

            <div className="ContactForm__info">
                <label className="ContactForm__info__label">Last</label>
                <input value={lastName} onChange={changeLastName} className="ContactForm__info__input"/>
            </div>

            <div className="ContactForm__info">
                <label className="ContactForm__info__label">Phone</label>
                <input value={phoneNumber} onChange={changePhoneNumber} className="ContactForm__info__input" required/>
            </div>

            <div className="ContactForm__info">
                <label className="ContactForm__info__label">Email</label>
                <input value={email} onChange={changeEmail} className="ContactForm__info__input"/>
            </div>
            
            <div className="ContactForm__info">
                <div className="ContactForm__info__buttons">
                    <button className="ContactForm__info__buttons__cancel">cancel</button>
                    <button className="ContactForm__info__buttons__edit">edit</button>
                </div>
            </div>
        </form>
    );

}

export default ContactForm;