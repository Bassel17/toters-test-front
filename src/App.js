import React from 'react';
import Home from './pages/home/Home';
import Edit from './pages/edit/Edit';
import View from './pages/view/View';
import {
    BrowserRouter as Router,
    Switch,
    Route,
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
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home data = {data}/>
                </Route>
                <Route exact path="/edit">
                    <Edit/>
                </Route>
                <Route exact path="/add">
                    <Edit/>
                </Route>
                <Route exact path="/contact">
                    <View contact/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;