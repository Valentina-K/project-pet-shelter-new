import { useLocation, useNavigate } from 'react-router-dom';
import LoginWindow from '../../components/AuthModal/LoginWindow';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserByEmail, loginUser } from '../../redux/auth/operations';

function SignInPage() {
  const location = useLocation();
  const email = location.state?.value || '';
  const from = localStorage.getItem('from') || '/';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleLoginSuccess = (value) => {
    dispatch(loginUser({ email: email, password: value })).then((result) => {
      console.log(result.payload);
      if (result.payload.email) {
        dispatch(getUserByEmail(email));
        navigate(from);
      } else {
        setError('Invalid password. Try again!');
      }
    });
  };

  return (
    <div>
      <LoginWindow
        title={'Еnter password '}
        type={'password'}
        onLoginSuccess={handleLoginSuccess}
        error={error}
      />
    </div>
  );
}

export default SignInPage;
