import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { verifyEmail } from '../../redux/auth/operations';
import Container from '../../layout/Container/Container';
import { useDispatch } from 'react-redux';
import AuthContainer from '../../layout/AuthContainer/AuthContainer';
import Loader from '../../components/Loader/Loader';
import WellcomeRegisterWindow from '../../components/AuthModal/WellcomeRegisterWindow';
import { inProgressTokens, processedTokens } from '../../modules/tokenManager';

function VerifyEmailPage() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const from = localStorage.getItem('from') || '/';

  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setMessage('Token not found.');
      setLoading(false);
      return;
    }

    // Если токен уже обрабатывался — выходим
    if (processedTokens.has(token) || inProgressTokens.has(token)) return;

    inProgressTokens.add(token);

    dispatch(verifyEmail(token))
      .then((res) => {
        if (res.payload === 200) {
          setMessage('Successful registration!');
          setIsSuccess(true);
        } else {
          setMessage('Email confirmation error.');
        }
        setLoading(false);
      })
      .catch(() => {
        setMessage('Network error. Try again.');
        setLoading(false);
      })
      .finally(() => {
        inProgressTokens.delete(token);
        processedTokens.add(token);
      });
  }, [token, dispatch]);

  return (
    <Container>
      <AuthContainer>
        {loading ? (
          <Loader />
        ) : (
          <WellcomeRegisterWindow
            title={message}
            isRegistration={isSuccess}
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
