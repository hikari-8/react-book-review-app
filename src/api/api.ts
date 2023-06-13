import axios from 'axios';
import { User, UserResponse, UserInfoResponse } from '../types/types';
import { error } from 'console';

const API_URL = process.env.REACT_APP_API_URL;

/**
 * ユーザー作成API
 * @param user 
 * @returns 
 */
export const createUser = async (user: User): Promise<UserResponse> => {
  try{
    const response = await axios.post<UserResponse>(`${API_URL}/users`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};
/**
 * ユーザー取得API
 * @param token 認証トークン
 * @returns 
 */
export const getUser = async (token: string): Promise<UserInfoResponse> => {
  try{
    const response =  await axios.get<UserInfoResponse>(`${API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(response)
    return response.data;
  } catch(error) {
    throw error;
  }
}

export const signIn = async (user: User): Promise<UserResponse> => {
  const response = await axios.post<UserResponse>(`${API_URL}/signin`, user);
  return response.data;
};