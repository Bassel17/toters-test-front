import React from 'react';
import './Home.scss';
import ContactCard from '../../components/ContactCard/ContactCard';
import {Link} from "react-router-dom";

const Home = (props) => {
    return (
        <div className="home">
            <Link to="/add" className="home__link"><button className="home__NewButton">new</button></Link>
            <div className="home__contacts">
            {props.data.map((contact)=>{
                return <ContactCard key={contact.id} contact= {contact}/>
            })}
            </div>
        </div>
    )
}

export default Home;