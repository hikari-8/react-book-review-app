// src/components/Signin.tsx
import React, { useState } from 'react';
import { User, UserAuthInfo } from '../types/types';
import { signIn } from '../api/auth';
import { getUser } from '../api/user';
import { useNavigate } from 'react-router-dom';
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
    <form onSubmit={handleSubmitNewUser} className='flex flex-col mx-52 space-y-4 mt-10'>
      <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password"  value={user.password} onChange={handleChange} />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
