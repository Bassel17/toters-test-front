import React from 'react';
import Home from './pages/home/Home';

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
        <Home data={data}/>
    );
}

export default App;