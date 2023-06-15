import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types/types';
import { createUser, getUser } from '../api/user';
import { useAuthInfoContext } from '../state/UserAuthInfoState';

const Signup: React.FC = () => {
  const [user, setUser] = useState<User>({name: '', email: '', password: ''});
  const navigate = useNavigate();
  const {authInfo, setAuthInfo} = useAuthInfoContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await createUser(user);
    const userInfo = await getUser(res.token); 
    setAuthInfo({
      ...authInfo,
      name: userInfo?.name,
      email: user.email,
      password: user.password,
      userIconUrl: userInfo?.iconUrl,
    })
    navigate("/user")
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col mx-52 space-y-4 mt-10'>
      <input type="text" name="name" value={user.name} onChange={handleChange} className='border-solid border-indigo-600' />
      <input type="email" name="email" value={user.email} onChange={handleChange} className='border-solid border-indigo-600'/>
      <input type="password" name="password" value={user.password} onChange={handleChange} className='border-solid border-indigo-600' />
      <button type="submit" className='border-solid border-indigo-600'>Sign Up</button>
    </form>
  );
};

export default Signup;
