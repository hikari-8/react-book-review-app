// src/components/Signin.tsx
import React, { useState } from 'react';
import { User } from '../types/types';
import { signIn } from '../api/auth';
import { getUser } from '../api/api';

const Signin: React.FC = () => {
  const [user, setUser] = useState<User>({email: '', password: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitNewUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn(user);
    const userInfo = await getUser(res.token); 
    console.log(userInfo);
  };

  return (
    <form onSubmit={handleSubmitNewUser} className='flex flex-col mx-52 space-y-4 mt-10'>
      <input type="email" name="email" value={user.email} onChange={handleChange} />
      <input type="password" name="password" value={user.password} onChange={handleChange} />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Signin;
