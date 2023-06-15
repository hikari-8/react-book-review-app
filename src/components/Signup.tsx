import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../types/types';
import { createUser, getUser } from '../api/user';
import { useAuthInfoContext } from '../state/UserAuthInfoState';

const SignUp: React.FC = () => {
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
    <form onSubmit={handleSubmit} className='flex flex-col space-y-4 mt-48'>
      <div className='text-center font-bold text-lg'>新規登録</div>
      <input type="text" name="name" value={user.name} onChange={handleChange} required className='mx-auto w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500' placeholder='Please enter your name' />
      <input type="email" name="email" value={user.email} onChange={handleChange} required className='mx-auto w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500' placeholder='Please enter your email'/>
      <input type="password" name="password" value={user.password} onChange={handleChange} required className='mx-auto w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500' placeholder='Please enter password' />
      <div className='mx-auto'>
        <button type="submit" className='block w-32 justify-center items-center text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-10'>Sign Up</button>
      </div>
      <div className='text-center'>
        アカウントをお持ちの方は
        <Link to="/login" className='underline hover:text-blue-700'>こちら</Link>
      </div>
    </form>
  );
};

export default SignUp;
