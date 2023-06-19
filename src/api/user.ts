import axios from 'axios';
import { User, UserResponse, UserInfoResponse } from '../types/types';

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
    return response.data;
  } catch(error) {
    throw error;
  }
}

/**
 * アイコン登録API
 */
export const registerUserIcon = async (iconUrl: File| Blob, token: string): Promise<UserResponse> => {
  try{
    const formData = new FormData();
    formData.append('icon', iconUrl);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      },
    };

    const response = await axios.post<UserResponse>(`${API_URL}/uploads`, formData, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};