import PropTypes from 'prop-types';
import styles from './AuthModal.module.css';
import { useState } from 'react';
import AuthSocial from './AuthSocial/AuthSocial';

function LoginWindow({ title, type, onLoginSuccess }) {
  const placeholder = type === 'text' ? 'Mail adresse' : 'Password';
  const [value, setValue] = useState('');

  const handleContinue = () => {
    onLoginSuccess(value);
    setValue('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <p className={styles.title}>{title}</p>
        <div className={styles.form}>
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onBlur={() => setValue(value)}
            className={styles.input}
          />
          <button onClick={handleContinue} className={styles.continueButton}>
            Continue
          </button>
        </div>
        <div className={styles.orLine}>or</div>
        <AuthSocial />
      </div>
    </div>
  );
}

LoginWindow.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginWindow;
