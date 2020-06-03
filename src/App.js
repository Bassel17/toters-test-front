import React, {useState, useEffect} from 'react';
import Home from './pages/home/Home';
import Edit from './pages/edit/Edit';
import View from './pages/view/View';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


const App = () => {
    const [contacts,setContacts] = useState([])

    useEffect(() => {
        async function getContacts () {
            try{
                const response = await fetch(
                `${process.env.REACT_APP_API}/contacts`);
                const result = await response.json();
                setContacts(result);
            }catch(error){
                console.log(error);
            }
        }

        getContacts();
      });

    const deleteContact = (id) => {
        const newContacts = contacts.filter((contact)=>contact.id !== id);
        setContacts(newContacts);
    }

    const saveContact = (contact) => {
        setContacts([...contacts,contact]);
    }

    const editContact = (contact) => {
        const newContacts = [];
        contacts.forEach((element)=>{
            if(element.id === contact.id)
                element = {...contact};
            newContacts.push(element);
        });
        setContacts(newContacts);
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home data = {contacts} deleteContact={deleteContact}/>
                </Route>
                <Route exact path="/edit">
                    <Edit saveContact = {editContact}/>
                </Route>
                <Route exact path="/add">
                    <Edit saveContact = {saveContact}/>
                </Route>
                <Route exact path="/contact">
                    <View deleteContact={deleteContact}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;