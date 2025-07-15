// src/pages/Accounts.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [form, setForm] = useState({ bank: '', accNo: '', holder: '' });
  const navigate = useNavigate();

  const handleAdd = () => {
    if (accounts.length >= 5) return alert('Max 5 accounts allowed');
    setAccounts([...accounts, { ...form, id: accounts.length + 1 }]);
    setForm({ bank: '', accNo: '', holder: '' });
  };

  const handleCardClick = (account) => {
    navigate(`/accounts/${account.id}`, { state: account });
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Accounts</h2>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <input
          placeholder="Bank Name"
          value={form.bank}
          onChange={(e) => setForm({ ...form, bank: e.target.value })}
        />
        <input
          placeholder="Account No"
          value={form.accNo}
          onChange={(e) => setForm({ ...form, accNo: e.target.value })}
        />
        <input
          placeholder="Holder Name"
          value={form.holder}
          onChange={(e) => setForm({ ...form, holder: e.target.value })}
        />
        <button onClick={handleAdd}>Add Account</button>
      </div>

      <div>
        {accounts.map((acc) => (
          <div key={acc.id} className="card" onClick={() => handleCardClick(acc)}>
            <h3>{acc.bank}</h3>
            <p>{acc.accNo}</p>
            <p>{acc.holder}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
