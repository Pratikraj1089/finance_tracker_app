// src/components/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', username: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);

    if (
      (credentials.username === 'admin' || credentials.email === 'admin@x.com') &&
      credentials.password === 'admin123'
    ) {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
          width: '300px'
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Welcome Back</h2>
        <input
          type="text"
          placeholder="Email or Username"
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value, email: e.target.value })
          }
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.5rem',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
