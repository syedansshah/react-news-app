import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/auth/Signup';
import Login from './Components/auth/Login';
import Feed from './Components/news/Feed';
import Profile from './Components/user/Profile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route  path="/signup" element={<Signup />} />
      <Route  path="/login" element={<Login />} />
      <Route  path="/feed" element={<Feed />} />
      <Route  path="/profile" element={<Profile />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
