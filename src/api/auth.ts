import axios from 'axios';
import { User, UserResponse } from '../types/types';

const API_URL = process.env.REACT_APP_API_URL;

/**
 * サインイン
 * @param user 
 * @returns 
 */
export const signIn = async (user: User): Promise<UserResponse> => {
  try {
    const response = await axios.post<UserResponse>(`${API_URL}/signin`, user);
    return response.data;
  } catch(error) {
    throw error
  }
};