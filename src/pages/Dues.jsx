import { useState } from 'react';

export default function Dues() {
  const [dues, setDues] = useState([]);
  const [form, setForm] = useState({ name: '', amount: '', desc: '', date: '', lastDate: '', paid: false });

  const handleAdd = () => {
    setDues([...dues, form]);
    setForm({ name: '', amount: '', desc: '', date: '', lastDate: '', paid: false });
  };

  const togglePaid = (index) => {
    const newDues = [...dues];
    newDues[index].paid = !newDues[index].paid;
    setDues(newDues);
  };

  const total = dues.reduce((sum, d) => sum + parseFloat(d.amount || 0), 0);
  const remaining = dues.filter((d) => !d.paid).reduce((sum, d) => sum + parseFloat(d.amount || 0), 0);

  return (
    <div>
      <h2>Dues</h2>
      <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
      <input placeholder="Description" value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} />
      <input placeholder="Date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
      <input placeholder="Last Date to Pay" value={form.lastDate} onChange={(e) => setForm({ ...form, lastDate: e.target.value })} />
      <button onClick={handleAdd}>Add Dues</button>

      <h3>Total Dues: ₹{total}</h3>
      <h3>Remaining: ₹{remaining}</h3>

      <ul>
        {dues.map((d, i) => (
          <li key={i}>
            {d.name} - ₹{d.amount} - {d.paid ? 'Paid' : 'Unpaid'}
            <button onClick={() => togglePaid(i)}>{d.paid ? 'Mark Unpaid' : 'Mark Paid'}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}