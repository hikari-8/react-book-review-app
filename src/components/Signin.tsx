// src/components/Signin.tsx
import React, { useState } from 'react';
import { User, UserAuthInfo } from '../types/types';
import { signIn } from '../api/auth';
import { getUser } from '../api/user';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthInfoContext } from '../state/UserAuthInfoState';

const SignIn: React.FC = () => {
  const [user, setUser] = useState<User>({email: '', password: ''});
  const navigate = useNavigate();
  const {authInfo, setAuthInfo} = useAuthInfoContext();

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

    // globalなstateにuserのinfoを入れる
    const userAuthInfo: UserAuthInfo = {
      ...authInfo, name: userInfo.name, email: user.email, password: user.password
    }
    console.log({userAuthInfo})
    setAuthInfo(userAuthInfo)
    navigate("/user")
  };

  return (
    <>
      <form onSubmit={handleSubmitNewUser} className='flex flex-col space-y-4 mt-48'>
        <div className='text-center font-bold text-lg'>ログイン</div>
        <input type="email" name="email" placeholder='Email' value={user.email} onChange={handleChange} className='mx-auto w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'  />
        <input type="password" name="password" placeholder="Password"  value={user.password} onChange={handleChange} className='mx-auto w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500' />
        <div className='mx-auto'>
          <button type="submit" className='block w-32 justify-center items-center text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-10'>Sign In</button>
        </div>
        <div className='text-center'>
          アカウントをお持ちでない方は
          <Link to="/signup" className='underline hover:text-blue-700'>こちら</Link>
        </div>
      </form>
    </>
  );
};

export default SignIn;
