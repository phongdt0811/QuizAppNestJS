// client/src/components/SignUpForm.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PATH } from 'src/constants/paths';

interface SignUpFormProps {
  onSignUp: (fullName: string, phoneNumber: string, password: string) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUp }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Call the onSignUp callback with the entered values
    onSignUp(fullName, phoneNumber, password);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Mobile Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md">
          Sign Up
        </button>
      </form>
      <div className="mt-4 text-center">
        <p>
          Already have an account?{' '}
          <Link to={PATH.SIGNIN} className="text-blue-500 underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
