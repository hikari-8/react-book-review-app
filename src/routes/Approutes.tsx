// src/routes/Routes.tsx
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Signin from '../components/SignIn';
import Signup from '../components/SignUp';
import { Home } from '../components/Home';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user" element={<Home />} />
      <Route path="/" element={<Navigate to="/signup"  replace />} />
    </Routes>
  );
};

export default AppRoutes;
