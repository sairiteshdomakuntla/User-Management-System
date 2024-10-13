import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { restoreUser } from '../redux/userSlice';

const RemovedUser = () => {
    const removedUsers = useSelector(state => state.users.removedUsers);
    const dispatch = useDispatch();

    return (
        <div className="p-8 bg-gray-800 min-h-screen">
            <h2 className="text-2xl font-semibold text-white mb-4">Removed Users</h2>
            <div className="grid gap-4">
                {removedUsers.map(user => (
                    <div key={user.id} className="p-4 bg-gray-700 rounded shadow flex justify-between">
                        <div>
                            <h3 className="font-semibold text-lg text-white">{user.name}</h3>
                            <p className="text-gray-300">Email: {user.email}</p>
                            <p className="text-gray-300">Mobile: {user.mobile}</p>
                            <p className="text-gray-300">Subject: {user.subject}</p>
                            <p className="text-gray-300">Message: {user.message}</p>
                        </div>
                        <button
                            onClick={() => dispatch(restoreUser(user.id))}
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                            Restore
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RemovedUser;
