import PropTypes from 'prop-types';
import styles from './EditModal.module.css';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

function EditModal({ profileDataId, userInfo, handleSave, onClose }) {
  const [value, setValue] = useState(userInfo.value);
  const profileData = [
    { label: 'Name correction:', value: userInfo.value },
    { label: 'Address correction:', value: userInfo.value },
    { label: 'Mail-address correction:', value: userInfo.value },
    { label: 'About us /Our mission text correction:', value: userInfo.value },
    { label: 'Tel. correction:', value: userInfo.value },
    { label: 'Social media correction:', value: userInfo.value },
  ];
  // social
  const handleKeyDown = (e) => {
    console.log('from keydown', value);
    if (e.key === 'Escape') {
      onClose();
    }
    if (e.key === 'Enter') {
      handleSave(value);
    }
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.backdrop} onClick={onClose}>
        <div
          className={styles.wrapper}
          onKeyDown={handleKeyDown}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.closeIcon} onClick={onClose}>
            <IoMdClose className={styles.close} />
          </div>
          <h1 className={styles.header}>{profileData[profileDataId].label}</h1>
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            className={styles.field}
          />
        </div>
      </div>
    </div>
  );
}

EditModal.propTypes = {
  profileDataId: PropTypes.number.isRequired,
  userInfo: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  handleSave: PropTypes.func.isRequired,
  onClose: PropTypes.func,
};

export default EditModal;
