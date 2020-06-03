import React, {useState} from 'react';
import Home from './pages/home/Home';
import Edit from './pages/edit/Edit';
import View from './pages/view/View';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
  } from "react-router-dom";

const data = [
{
    id:1,
    email:"bassel@codi.tech",
    last_name:"Kanso",
    first_name:"Bassel",
    phone_number:"899016756"
},
{
    id:2,
    email:"bassel@gmail.com",
    last_name:"Kanso",
    first_name:"Bassel",
    phone_number:"76307825"
},
]

const App = () => {
    const [contacts,setContacts] = useState(data)

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