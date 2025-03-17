import { useState } from 'react';
import { useDispatch } from 'react-redux';
import RoleWindow from '../../components/AuthModal/Register/RoleWindow/RoleWindow';
import RegisterForm from '../../components/AuthModal/Register/RegisterForm/RegisterForm';
import SendMessageWindow from '../../components/AuthModal/SendMessageWindow/SendMessageWindow';
import { registerUser } from '../../redux/auth/operations';

function RegisterPage() {
  const dispatch = useDispatch();
  const [chooseRole, setRole] = useState('');
  //const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const text =
    'A message with registration confirmation data has been sent to your address. Please check your mail and spam folder.';

  const handleRole = (role) => {
    setRole(role);
  };
  const handleSubmitted = (value) => {
    setIsSubmitted(true);
    dispatch(registerUser(value)).then((result) => {
      console.log(result.payload);
    });
  };

  return (
    <div>
      {!chooseRole && <RoleWindow onChooseRole={handleRole} />}
      {!isSubmitted && chooseRole && (
        <RegisterForm chooseRole={chooseRole} onFormSubmit={handleSubmitted} />
      )}
      {isSubmitted && <SendMessageWindow text={text} />}
    </div>
  );
}

export default RegisterPage;
