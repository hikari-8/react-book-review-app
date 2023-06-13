/**
 * User
 */
export interface User {
  name?: string;
  email: string;
  password: string;
}

export interface UserResponse {
  userId: string;
  token: string;
}

export interface UserInfoResponse {
  name: string;
  iconUrl: string;
}