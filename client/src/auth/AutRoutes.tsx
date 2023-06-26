import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthenticationPage from './pages';
import { OrganizationLoginPage } from './pages/organization/LoginPage';
import { OrganizationRegisterPage } from './pages/organization/RegisterPage';
import { VolunteerLoginPage } from './pages/volunteer/LoginPage';
import { VolunteerRegisterPage } from './pages/volunteer/RegisterPage';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationPage />} />
      <Route path="/organization/login" element={<OrganizationLoginPage />} />
      <Route path="/organization/register" element={<OrganizationRegisterPage />} />

      <Route path="/volunteer/login" element={<VolunteerLoginPage />} />
      <Route path="/volunteer/register" element={<VolunteerRegisterPage />} />

      {/* Ruta de protección */}
      <Route path="/*" element={<Navigate to="/auth/" />} />
    </Routes>
  );
};
