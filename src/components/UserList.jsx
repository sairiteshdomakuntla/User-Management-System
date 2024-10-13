// import React from 'react';
// import { Link } from 'react-router-dom';

// const UserList = ({ users, onRemove }) => {
//     return (
//         <div className="grid gap-4">
//             {users.map((user) => (
//                 <div key={user.id} className="p-4 bg-gray-700 rounded shadow flex flex-col">
//                     <h3 className="font-semibold text-lg text-white">{user.name}</h3>
//                     <p className="text-gray-300">Email: {user.email}</p>
//                     <p className="text-gray-300">Mobile: {user.mobile}</p>
//                     <p className="text-gray-300">Subject: {user.subject}</p>
//                     <p className="text-gray-300">Message: {user.message}</p>
//                     <div className="mt-4 space-x-2">
//                         <button onClick={() => onRemove(user)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
//                         <Link to={`/edit-user/${user.id}`} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</Link>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default UserList;
