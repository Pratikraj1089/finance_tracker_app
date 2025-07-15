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
    if (credentials.username === 'admin' || credentials.email === 'admin@x.com') {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email or Username"
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value, email: e.target.value })
          }
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}