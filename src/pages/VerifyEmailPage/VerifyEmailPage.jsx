import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { verifyEmail } from '../../redux/auth/operations';
import Container from '../../layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth/selectors';
import WellcomeWindow from '../../components/AuthModal/WellcomeWindow';
import AuthContainer from '../../layout/AuthContainer/AuthContainer';

function VerifyEmailPage() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const from = localStorage.getItem('from') || '/';
  const { user } = useSelector(selectAuth);

  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setMessage('Token not found.');
      setLoading(false);
      return;
    }

    dispatch(verifyEmail(token))
      .then(async (res) => {
        const data = await res.json();
        console.log('data', data); //data.status = 200?
        if (res.ok) {
          setIsSuccess(true);
          setMessage(data.message || 'Successful registration!');
        } else {
          setMessage(data.message || 'Email confirmation error.');
        }
        setLoading(false);
      })
      .catch(() => {
        setMessage('Network error. Try again.');
        setLoading(false);
      });
  }, [token, dispatch]);

  return (
    <Container>
      <AuthContainer>
        {loading && <p>Token verification...</p>}
        {isSuccess && user && (
          <WellcomeWindow
            title={message}
            firstname={user.firstName}
            lastname={user.lastName}
            email={user.email}
            isRegistration={true}
            onCloseWindow={() => {
              navigate(from);
            }}
          />
        )}
      </AuthContainer>
    </Container>
  );
}

export default VerifyEmailPage;
