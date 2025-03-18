import PropTypes from 'prop-types';
import role from '../../../../constants/role';
import styles from './RoleWindow.module.css';

function RoleWindow({ onChooseRole }) {
  const handleRole = (e) => {
    const ROLE =
      e.target.id === '1'
        ? role.SHELTER[1]
        : e.target.id === '2'
          ? role.VOLUNTEER[1]
          : role.USER[1];
    onChooseRole(ROLE);
  };
  return (
    <div className={styles.container}>
      <h2>Sing in or register</h2>
      <div className={styles.buttonContainer}>
        <button id="1" onClick={handleRole}>
          {role.SHELTER[0]}
        </button>
        <button id="2" onClick={handleRole}>
          {role.VOLUNTEER[0]}
        </button>
        <button id="3" onClick={handleRole}>
          {role.USER[0]}
        </button>
      </div>
    </div>
  );
}

RoleWindow.propTypes = {
  onChooseRole: PropTypes.func.isRequired,
};

export default RoleWindow;
