import React from 'react';
import './Home.scss';
import ContactCard from '../../components/ContactCard/ContactCard';

const Home = (props) => {
    return (
        <div className="home">
            <button className="home__NewButton">new</button>
            <div className="home__contacts">
            {props.data.map((contact)=>{
                return <ContactCard first_name = {contact.first_name} last_name={contact.last_name} phone_number={contact.phone_number}/>
            })}
            </div>
        </div>
    )
}

export default Home;