import React, { useState } from 'react';
import { addUser } from './path/to/userAPI';

function Signincomponent() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(username, email, password)
      .then((response) => {
        // Handle successful response
      })
      .catch((error) => {
        // Handle error
      });
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Signincomponent;
