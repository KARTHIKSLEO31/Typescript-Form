import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

interface User {
  name: string;
  phoneNumber: string;
  email: string;
}

const User: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user: User = { name, phoneNumber, email };
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/posts');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        label="Phone Number"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default User;