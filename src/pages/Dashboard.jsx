// src/pages/Dashboard.jsx
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const [credit, setCredit] = useState(0);
  const [debit, setDebit] = useState(0);
  const [duesTotal, setDuesTotal] = useState(0);
  const [duesRemaining, setDuesRemaining] = useState(0);

  const { logout } = useAuth();
  const navigate = useNavigate();

  const status = credit - debit - duesRemaining;
  let statusColor = 'black';
  let statusText = 'Good';
  if (status < 0) statusColor = 'red';
  else if (status < 2000) statusText = 'Poor';
  else if (status < 4000) statusText = 'Moderate';

  useEffect(() => {
    setCredit(10000);
    setDebit(3500);
    setDuesTotal(2000);
    setDuesRemaining(1000);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <nav>
        <Link to="/accounts">Accounts</Link>
        <Link to="/dues">Dues</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <p>Total Credited: ₹{credit}</p>
      <p>Total Debited: ₹{debit}</p>
      <p>Remaining Balance: ₹{credit - debit}</p>
      <p>Total Dues: ₹{duesTotal}</p>
      <p>Remaining Dues: ₹{duesRemaining}</p>
      <p style={{ color: statusColor }}>Status: ₹{status}</p>

      <footer>
        <p>
          {status < 1000
            ? 'You are in poor condition'
            : status < 4000
            ? 'Moderate condition'
            : 'Good!'}
        </p>
      </footer>
    </div>
  );
}
