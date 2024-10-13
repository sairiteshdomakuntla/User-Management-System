import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

function UserDetails() {
    const { id } = useParams();
    const users = useSelector(state => state.users.users);
    const navigate = useNavigate();

    // Log for debugging
    console.log("ID from params:", id);
    console.log("All users:", users);

    // Try finding the user with both string and number ID
    const user = users.find(user => user.id === id || user.id === parseInt(id));

    // Log the found user
    console.log("Found user:", user);

    if (!user) {
        return <div>User not found. ID: {id}</div>
    }

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-semibold mb-4">{user.name}'s Details</h2>
            <div className="bg-white p-6 rounded shadow">
                <img 
                    src={user.image || 'https://via.placeholder.com/150'} 
                    alt={`${user.name}'s profile`} 
                    className="h-32 w-32 rounded-full mx-auto mb-4" 
                />
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Mobile:</strong> {user.mobile}</p>
                <p><strong>Address:</strong> {user.address}</p>
                <p><strong>Date of Birth:</strong> {user.dob}</p>
                <p><strong>Role:</strong> {user.role}</p>
                <p><strong>Gender:</strong> {user.gender}</p>
                <button 
                    onClick={() => navigate('/users')} 
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Back to Users
                </button>
            </div>
        </div>
    )
}

export default UserDetails