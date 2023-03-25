import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
    return ( <
        div className = "App" >
        <
        ExternelUsers > < /ExternelUsers> <
        /div>
    );
}


function ExternelUsers() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return ( <
        div >
        <
        h2 > Externel Users < /h2> <
        p > { users.length } < /p> {
            // users.map(users=><li>{users.name}</li>)
            users.map(users => < Users name = { users.name }
                    email = { users.email } > < /Users>)
                } <
                /div>
        )
    }

    function Users(props) {
        return ( <
            div style = {
                {
                    border: '2px solid red',
                    margin: '30px',
                    backgroundColor: 'greenyellow'
                }
            } >
            <
            h3 > Name: { props.name } < /h3> <
            p > Email: { props.email } < /p> <
            /div>
        )
    }
    export default App;