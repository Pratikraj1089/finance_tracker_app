import { useState } from 'react';

export default function Dues() {
  const [dues, setDues] = useState([]);
  const [form, setForm] = useState({
    name: '',
    amount: '',
    description: '',
    date: '',
    lastDate: '',
    paid: false,
  });

  const addDue = () => {
    if (!form.name || !form.amount || !form.date || !form.lastDate) {
      alert('Please fill all required fields');
      return;
    }

    setDues([...dues, form]);
    setForm({ name: '', amount: '', description: '', date: '', lastDate: '', paid: false });
  };

  const togglePaid = (index) => {
    const updated = [...dues];
    updated[index].paid = !updated[index].paid;
    setDues(updated);
  };

  const total = dues.reduce((a, d) => a + Number(d.amount), 0);
  const remaining = dues.filter((d) => !d.paid).reduce((a, d) => a + Number(d.amount), 0);

  const cellStyle = {
    padding: '8px',
    border: '1px solid #cbd5e0',
    textAlign: 'center'
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Dues Management</h2>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Amount"
          type="number"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />
        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <input
          type="date"
          value={form.lastDate}
          onChange={(e) => setForm({ ...form, lastDate: e.target.value })}
        />
        <button onClick={addDue}>Add Due</button>
      </div>

      <h3>Total Dues: ₹{total}</h3>
      <h3>Remaining Dues: ₹{remaining}</h3>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#e2e8f0' }}>
            <th style={cellStyle}>Date</th>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Amount</th>
            <th style={cellStyle}>Description</th>
            <th style={cellStyle}>Due By</th>
            <th style={cellStyle}>Status</th>
            <th style={cellStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {dues.map((due, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: due.paid ? '#dcfce7' : '#fee2e2',
                color: '#1f2937'
              }}
            >
              <td style={cellStyle}>{due.date}</td>
              <td style={cellStyle}>{due.name}</td>
              <td style={cellStyle}>₹{due.amount}</td>
              <td style={cellStyle}>{due.description}</td>
              <td style={cellStyle}>{due.lastDate}</td>
              <td style={cellStyle}>{due.paid ? 'Paid' : 'Unpaid'}</td>
              <td style={cellStyle}>
                <button
                  onClick={() => togglePaid(index)}
                  style={{
                    backgroundColor: due.paid ? 'green' : 'red',
                    color: 'white',
                    padding: '4px 8px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  {due.paid ? 'Unmark' : 'Mark Paid'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
