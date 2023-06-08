import axios from 'axios';
import { User, UserResponse } from '../types/types';

const API_URL = process.env.REACT_APP_API_URL;

export const createUser = async (user: User): Promise<UserResponse> => {
  console.log(API_URL)
  const response = await axios.post<UserResponse>(`${API_URL}/users`, user);
  return response.data;
};

export const signIn = async (user: User): Promise<UserResponse> => {
  console.log(API_URL)
  const response = await axios.post<UserResponse>(`${API_URL}/signin`, user);
  return response.data;
};
