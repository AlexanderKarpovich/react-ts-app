import React, { useEffect, useState } from 'react'
import { IUser } from '../../../types/interfaces';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserItemPage = () => {
    const [user, setUser] = useState<IUser>();
    const { id } = useParams<{id?: string}>();
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id);
            setUser(response.data)
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>User</h1>
            <p><b>Name:</b> {user?.name}</p>
            <p><b>Email:</b> {user?.email}</p>
            <button onClick={() => navigate('/users')}>Back</button>
        </div>
    )
}

export default UserItemPage