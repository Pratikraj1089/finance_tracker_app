// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './pages/Dashboard';
import Accounts from './pages/Accounts';
import Dues from './pages/Dues';
import AccountDetails from './pages/AccountDetails';
import AdminPanel from './pages/AdminPanel';
import { useAuth } from './context/AuthContext';

export default function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {user && user.role === 'user' && (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/accounts/:id" element={<AccountDetails />} />
          <Route path="/dues" element={<Dues />} />
        </>
      )}

      {user && user.role === 'superadmin' && (
        <Route path="/admin" element={<AdminPanel />} />
      )}

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
