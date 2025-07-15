// src/pages/AdminPanel.jsx
export default function AdminPanel() {
  const mockUsers = [
    { username: 'user', password: 'user123', active: true },
    { username: 'test', password: 'test123', active: false },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Super Admin Panel</h2>
      {mockUsers.map((user, index) => (
        <div key={index} className="card">
          <p><b>Username:</b> {user.username}</p>
          <p><b>Password:</b> {user.password}</p>
          <button>{user.active ? 'Deactivate' : 'Activate'}</button>
          <button style={{ marginLeft: '1rem' }}>Login as User</button>
        </div>
      ))}
    </div>
  );
}
