import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, editUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

function Users() {
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map(user => (
          <div key={user.id} className="p-4 bg-white rounded shadow flex flex-col">
            <img 
              src={user.image || 'https://via.placeholder.com/150'} // Use a placeholder if no image
              alt={`${user.name}'s profile`} 
              className="h-32 w-32 rounded-full mx-auto mb-4" 
            />
            <h3 className="text-lg font-semibold text-center">{user.name}</h3>
            <p className="text-center text-gray-600">{user.email}</p>
            <div className="flex justify-between mt-4 space-x-2">
              <button 
                onClick={() => dispatch(deleteUser(user.id))} 
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" // Reduced height
              >
                Delete
              </button>
              <button 
                onClick={() => { dispatch(editUser(user)); navigate('/edit-user'); }} 
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600" // Reduced height
              >
                Edit
              </button>
              <button 
                onClick={() => navigate(`/user-details/${user.id}`)} // Navigate to user details page
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" // Reduced height
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
