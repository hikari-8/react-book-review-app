import { render, screen } from '@testing-library/react';
import SignIn from './SignIn';
import { useNavigate } from 'react-router-dom';
import { useAuthInfoContext } from '../state/UserAuthInfoState';
import '@testing-library/jest-dom/extend-expect';

// Mock hooks
// 実行時にコンテクストを必要とするhooks
//useNavigateとuseAuthInfoContextのフックをダミーの関数で置き換えて、それぞれのフックが期待する返り値を模擬的に提供
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../state/UserAuthInfoState', () => ({
  useAuthInfoContext: jest.fn(),
}));

describe('SignIn component', () => {
  beforeEach(() => {
    // Setup mock implementations
    (useNavigate as jest.Mock).mockImplementation(() => jest.fn());
    (useAuthInfoContext as jest.Mock).mockImplementation(() => ({
      authInfo: null,
      setAuthInfo: jest.fn(),
    }));
  });
  it('renders the input fields and the button', () => {
    render(<SignIn />);

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});