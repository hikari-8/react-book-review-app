import React, { useState } from 'react';
import { User } from '../types/types';
import { createUser } from '../api/api';

const Signup: React.FC = () => {
  const [user, setUser] = useState<User>({name: '', email: '', password: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await createUser(user);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={user.name} onChange={handleChange} />
      <input type="email" name="email" value={user.email} onChange={handleChange} />
      <input type="password" name="password" value={user.password} onChange={handleChange} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
