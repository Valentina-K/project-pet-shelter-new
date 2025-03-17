import PropTypes from 'prop-types';
import role from '../../../../constants/role';
import styles from './RoleWindow.module.css';

function RoleWindow({ onChooseRole }) {
  const handleRole = (e) => {
    onChooseRole(e.target.textContent);
  };
  return (
    <div className={styles.container}>
      <h2>Sing in or register</h2>
      <div className={styles.buttonContainer}>
        <button onClick={handleRole}>{role.SHELTER}</button>
        <button onClick={handleRole}>{role.VOLUNTEER}</button>
        <button onClick={handleRole}>{role.USER}</button>
      </div>
    </div>
  );
}

RoleWindow.propTypes = {
  onChooseRole: PropTypes.func.isRequired,
};

export default RoleWindow;
