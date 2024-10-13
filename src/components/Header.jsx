import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg flex items-center justify-between">
      <div className="flex items-center">
        <img src="https://png.pngtree.com/png-clipart/20190629/original/pngtree-vector-user-management-icon-png-image_4101419.jpg" alt="Logo" className="h-8 w-auto mr-4" />
        <h1 className="text-lg font-bold">User Management System</h1>
      </div>
      <nav className="flex space-x-4">
        <Link to='/users' className="hover:text-gray-400">Users</Link>
        <Link to='/new-user' className="hover:text-gray-400">New User</Link>
        <Link to='/removed-users' className="hover:text-gray-400">Removed Users</Link>
        <Link to='/' className="hover:text-gray-400">Dashboard</Link>
      </nav>
    </header>
  );
}

export default Header;
