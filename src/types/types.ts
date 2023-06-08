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
