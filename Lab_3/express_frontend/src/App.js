import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:3001/api/users");
    setUsers(response.data);
  };

  const addUser = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/api/users", { name, email });
    setName("");
    setEmail("");
    fetchUsers();
  };

  const viewUserDetails = async (id) => {
    const response = await axios.get(`http://localhost:3001/api/users/${id}`);
    setSelectedUser(response.data);
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-cy="name-input"
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          data-cy="email-input"
        />
        <button type="submit" data-cy="add-user-button">
          Add User
        </button>
      </form>

      <h2>Users</h2>
      <ul data-cy="user-list">
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email}){" "}
            <button
              onClick={() => viewUserDetails(user.id)}
              data-cy={`view-user-${user.id}`}
            >
              View Details
            </button>
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div data-cy="user-details">
          <h3>User Details</h3>
          <p>Name: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
