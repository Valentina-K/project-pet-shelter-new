import { useLocation, useNavigate } from 'react-router-dom';
import LoginWindow from '../../components/AuthModal/LoginWindow';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

function SignInPage() {
  const isAuth = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mail, setMail] = useState('');
  const [type, setType] = useState('text');

  useEffect(() => {
    console.log('from useEffect', isAuth);
    if (isAuth) {
      navigate(from);
    } else {
      console.log('goto register');
    }
  }, [isAuth, from, navigate]);

  const handleLoginSuccess = (value) => {
    if (type === 'text') {
      console.log('mail', value);
      setMail(value);
      setType('password');
    } else {
      console.log('password', value);
      console.log(mail, value);
      dispatch(loginUser({ email: mail, password: value }));
    }
    /*  */
  };
  return (
    <div>
      <LoginWindow
        title={'Sing in or register '}
        type={type}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}

export default SignInPage;
