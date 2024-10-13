import React from 'react'
import './App.css'
import store from './redux/store'
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Users from './pages/Users'
import NewUser from './pages/NewUser'
import RemovedUser from './pages/RemovedUser'
import Header from './components/Header'
import EditUserModal from './pages/EditUserModal'
import Home from './pages/Home'
import UserDetails from './pages/UserDetails'

console.log('App.js is being executed');

function App() {
  console.log('App component is rendering');

  return (
    
    <Provider store={store}>
      <Router>
      <Header />
        <div>App is rendering</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/removed-users" element={<RemovedUser />} />
          <Route path="/user-details/:id" element={<UserDetails />} />
          <Route path="/edit-user" element={<EditUserModal />} />
          <Route path="/new-user" element={<NewUser />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;