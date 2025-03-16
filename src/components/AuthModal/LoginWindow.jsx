import PropTypes from 'prop-types';
import styles from './AuthModal.module.css';
import { useEffect, useState } from 'react';
import AuthSocial from './AuthSocial/AuthSocial';
import { Link } from 'react-router-dom';

function LoginWindow({ title, type, error = '', onLoginSuccess }) {
  const placeholder = type === 'email' ? 'Mail adresse' : 'Password';
  const [value, setValue] = useState('');
  const [classError, setClassError] = useState(
    error ? `${styles.inputError}` : ''
  );

  useEffect(() => {
    setClassError(error ? `${styles.inputError}` : '');
  }, [error]);

  const handleContinue = () => {
    onLoginSuccess(value);
    setValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
      handleContinue();
    }
  };

  const handleFocus = () => {
    setClassError('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <p className={styles.title}>{title}</p>
        <div className={styles.form}>
          <div className={classError}>
            <input
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              onBlur={() => setValue(value)}
              onFocus={handleFocus}
              onKeyDown={handleKeyDown}
              className={styles.input}
            />
            {error && (
              <div className={styles.error}>
                <p>* {error}</p>
                <Link to="/reset-password" className={styles.link}>
                  Forgot password
                </Link>
              </div>
            )}
          </div>
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
  error: PropTypes.string,
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginWindow;
