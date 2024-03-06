import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from 'src/constants/paths';

import SignInForm from '../../components/Form/SignInForm';

const SignInPage: React.FC = () => {
  const handleSignIn = (phoneNumber: string, password: string) => {
    // Implement authentication logic
    console.log('Signing in with:', phoneNumber, password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <SignInForm onSignIn={handleSignIn} />
      {/* <div className="mt-4 text-center">
        <p>
          Don't have an account?{' '}
          <Link to={PATH.SIGNUP} className="text-blue-500 underline">
            Sign Up
          </Link>
        </p>
      </div> */}
    </div>
  );
};

export default SignInPage;
