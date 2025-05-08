import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RoleWindow from '../../components/AuthModal/Register/RoleWindow/RoleWindow';
import RegisterForm from '../../components/AuthModal/Register/RegisterForm/RegisterForm';
import SendMessageWindow from '../../components/AuthModal/SendMessageWindow/SendMessageWindow';
import { getUserById, registerUser } from '../../redux/auth/operations';
import WellcomeWindow from '../../components/AuthModal/WellcomeWindow';
import { useNavigate } from 'react-router';
import { selectAuth } from '../../redux/auth/selectors';
import Container from '../../layout/Container/Container';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [chooseRole, setRole] = useState('');
  const { user } = useSelector(selectAuth);
  //const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const from = localStorage.getItem('from') || '/';
  const text =
    'A message with registration confirmation data has been sent to your address. Please check your mail and spam folder.';

  const handleRole = (role) => {
    setRole(role);
  };
  const handleSubmitted = (value) => {
    setIsSubmitted(true);
    dispatch(registerUser(value)).then((result) => {
      const { id } = result.payload;
      if (id) dispatch(getUserById(id));
      setIsSuccess(true);
    });
  };

  return (
    <Container>
      <PageWrapper>
        {!chooseRole && <RoleWindow onChooseRole={handleRole} />}
        {!isSuccess && !isSubmitted && chooseRole && (
          <RegisterForm
            chooseRole={chooseRole}
            onFormSubmit={handleSubmitted}
          />
        )}
        {isSubmitted && <SendMessageWindow text={text} />}
        {isSuccess && user && (
          <WellcomeWindow
            title={'Successful registration!'}
            firstname={user.firstName}
            lastname={user.lastName}
            email={user.email}
            isRegistration={true}
            onCloseWindow={() => {
              navigate(from);
            }}
          />
        )}
      </PageWrapper>
    </Container>
  );
}

export default RegisterPage;
