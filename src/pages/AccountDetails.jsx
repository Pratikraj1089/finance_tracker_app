// src/pages/AccountDetails.jsx
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function AccountDetails() {
  const { state } = useLocation();
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({ type: 'credit', amount: '', party: '', date: '' });

  const handleAddTransaction = () => {
    setTransactions([...transactions, form]);
    setForm({ type: 'credit', amount: '', party: '', date: '' });
  };

  const totalCredit = transactions
    .filter((t) => t.type === 'credit')
    .reduce((a, b) => a + Number(b.amount), 0);

  const totalDebit = transactions
    .filter((t) => t.type === 'debit')
    .reduce((a, b) => a + Number(b.amount), 0);

  const balance = totalCredit - totalDebit;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>
        {state?.bank} - {state?.holder}
      </h2>
      <p>Total Credited: ₹{totalCredit}</p>
      <p>Total Debited: ₹{totalDebit}</p>
      <p>Remaining Balance: ₹{balance}</p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
        <input
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />
        <input
          placeholder={form.type === 'credit' ? 'Credited From' : 'Send To'}
          value={form.party}
          onChange={(e) => setForm({ ...form, party: e.target.value })}
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <button onClick={handleAddTransaction}>Add</button>
      </div>

      <ul style={{ marginTop: '1rem' }}>
        {transactions.map((t, i) => (
          <li key={i}>
            {t.date} - {t.type.toUpperCase()} ₹{t.amount} {t.type === 'credit' ? 'from' : 'to'} {t.party}
          </li>
        ))}
      </ul>
    </div>
  );
}
