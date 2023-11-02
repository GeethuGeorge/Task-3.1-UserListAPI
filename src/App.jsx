import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UserList from "./component/UserList";

function App() {
    const [userList, setUserList] = useState([]);

    //Fetch API using axios

    const fetchUsers = async () => {
        const response = await axios("https://jsonplaceholder.typicode.com/users");
        const users = response.data;
        setUserList(users);
    };
console.log(userList)


    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="app">
            <UserList userList={userList} setUserList={setUserList}/>
        </div>
    );
}

export default App;
