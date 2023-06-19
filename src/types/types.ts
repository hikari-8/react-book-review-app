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

/**
 * book reviews
 */
export interface BookReviewInfo {
    id: string;
    title: string;
    url: string;
    detail: string,
    review: string;
    reviewer: string;
}