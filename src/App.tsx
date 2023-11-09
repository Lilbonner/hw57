import React, {useState} from 'react';
import Navbar from './Сomponents/Navbar/Navbar';
import './App';
import UserForm from './Сomponents/UserForm/UserForm';
import Users from "./Сomponents/Users/Users";
import {User} from "./Types";

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([
    ]);

    const addUser = (user: User) => {
        setUsers((prev) => [...prev, user]);
    };

    return (
        <>
            <nav>
                <Navbar/>
            </nav>
            <main className="container-fluid">
                <div className="row mt-2">
                    <div className="col-4">
                        <h3 className="text-center">Add user.</h3>
                        <UserForm onSubmit={addUser}/>
                    </div>
                    <div className="col-4">
                        <h3 className="text-center">User list:</h3>
                        <Users users={users}/>
                    </div>
                </div>
            </main>
        </>
    );
};

export default App;
