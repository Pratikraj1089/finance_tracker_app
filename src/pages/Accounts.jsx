import { useState } from 'react';

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [form, setForm] = useState({ bank: '', accNo: '', holder: '' });

  const handleAdd = () => {
    if (accounts.length >= 5) return alert('Max 5 accounts allowed');
    setAccounts([...accounts, form]);
    setForm({ bank: '', accNo: '', holder: '' });
  };

  return (
    <div>
      <h2>Accounts</h2>
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
      <ul>
        {accounts.map((acc, i) => (
          <li key={i}>
            <strong>{acc.bank}</strong> - {acc.accNo} - {acc.holder}
          </li>
        ))}
      </ul>
    </div>
  );
}