/**
 * User
 */
export interface User {
  name?: string;
  email: string;
  password: string;
}

export interface UserResponse {
  token: string;
}

export interface UserInfoResponse {
  name: string;
  iconUrl: string;
}

/**
 * useContextで保持しておくUserのAuth型
 */
export interface UserAuthInfo {
  userId?: string;
  name?: string;
  email?: string;
  password?: string;
  userIconUrl?: string;
}