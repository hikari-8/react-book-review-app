// src/routes/Routes.tsx
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import { Home } from '../components/Home';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user" element={<Home />} />
      <Route path="/" element={<Navigate to="/signin"  replace />} />
    </Routes>
  );
};

export default AppRoutes;
