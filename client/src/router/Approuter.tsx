import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/AutRoutes';
import { Dashboard } from '../pages/Dashboard';
import { HomePage } from '../pages/HomePage';

function Approuter() {
  const isAuthenticated = false; // Cambia esto a `false` para simular un usuario no autenticado

  return (
    <Routes>
      {/* Ruta de acceso al publico */}
      <Route path="/home" element={<HomePage />} />

      {/* Ruta condicionada por la authenticated del usuario */}
      {isAuthenticated ? (
        <Route path="/dashboard" element={<Dashboard />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      {/* Ruta de protección, en caso de que el usuario quiera ir a una dirección aleatoria */}
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default Approuter;
