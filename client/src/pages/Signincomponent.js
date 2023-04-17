import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Signincomponent() {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [addUser, { error }] = useMutation(ADD_USER);
  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const { data } = await addUser({
        variables: {...formData }
      });
      Auth.login(data.addUser.token);
    }
    catch (e) {
      console.error(e);
    }
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Signincomponent;
