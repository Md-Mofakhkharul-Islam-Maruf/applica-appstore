import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Auth/AuthContext';

const SocialLogin = ({ from }) => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(result => {
        console.log('Google login success:', result.user);
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.error('Google login error:', error);
      });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="btn btn-outline btn-primary w-full mt-4"
    >
      Continue with Google
    </button>
  );
};

export default SocialLogin;
