import { useState } from 'react';
import { useDispatch } from 'react-redux';
import RoleWindow from '../../components/AuthModal/Register/RoleWindow/RoleWindow';
import RegisterForm from '../../components/AuthModal/Register/RegisterForm/RegisterForm';
import SendMessageWindow from '../../components/AuthModal/SendMessageWindow/SendMessageWindow';
import { getUserById, registerUser } from '../../redux/auth/operations';
import WellcomeWindow from '../../components/AuthModal/WellcomeWindow';
import { useNavigate } from 'react-router';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [chooseRole, setRole] = useState('');
  //const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const from = localStorage.getItem('from') || '/';
  const text =
    'A message with registration confirmation data has been sent to your address. Please check your mail and spam folder.';

  const handleRole = (role) => {
    console.log(role);
    setRole(role);
  };
  const handleSubmitted = (value) => {
    setIsSubmitted(true);
    dispatch(registerUser(value)).then((result) => {
      const { id } = result.payload;
      if (id) dispatch(getUserById(id));
      console.log(result.payload, id);
      setIsSuccess(true);
    });
  };

  return (
    <div>
      {!chooseRole && <RoleWindow onChooseRole={handleRole} />}
      {!isSuccess && !isSubmitted && chooseRole && (
        <RegisterForm chooseRole={chooseRole} onFormSubmit={handleSubmitted} />
      )}
      {isSubmitted && <SendMessageWindow text={text} />}
      {isSuccess && (
        <WellcomeWindow
          title={'Successful registration!'}
          firstname={'Petya'}
          lastname={'Ivanov'}
          email={'www@s.com'}
          isRegistration={true}
          onCloseWindow={() => {
            navigate(from);
          }}
        />
      )}
    </div>
  );
}

export default RegisterPage;
