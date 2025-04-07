//import React from 'react'

import { useSelector } from 'react-redux';
import { FaFacebook, FaTelegram } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { selectAuth } from '../../redux/auth/selectors';
import Edit from '../../assets/img/Edit.png';
import styles from './styles.module.css';
// import { useState } from 'react';

function MainPage() {
  const { user } = useSelector(selectAuth);
  /*  const dispatch = useDispatch();
  
  const [editField, setEditField] = useState(null);
  const [formData, setFormData] = useState(user); */

  /* const handleChange = (e) => {
    setFormData({ ...formData, [editField]: e.target.value });
  };

  const handleSave = () => {
    dispatch(updateProfile({ [editField]: formData[editField] })); // Обновляем только одно поле
    setEditField(null);
  }; */

  const socialLinks = [
    {
      name: 'Facebook',
      url: user.contactInfo
        ? `https://www.facebook.com/${user.contactInfo.facebook}`
        : 'https://www.facebook.com',
      icon: <FaFacebook className={styles.socialIcon} />,
    },
    {
      name: 'Instagram',
      url: user.contactInfo
        ? `https://www.instagram.com/${user.contactInfo.instagram}`
        : 'https://www.instagram.com',
      icon: <RiInstagramFill className={styles.socialIcon} />,
    },
    {
      name: 'Telegram',
      url: user.contactInfo
        ? `https://t.me/${user.contactInfo.telegram}`
        : 'https://t.me',
      icon: <FaTelegram className={styles.socialIcon} />,
    },
  ];
  console.log(user);
  return (
    <div className={styles.pageSection}>
      <h2 className={styles.title}>About me</h2>
      <div className={styles.infoBlock}>
        <div className={styles.left}>
          <div className={styles.infoItem}>
            <div>
              <p className={styles.nameText}>Name: </p>
              <p className={styles.nameValue}>
                {user.firstName} {user.lastName}
              </p>
            </div>
            <img src={Edit} alt="edit" className={styles.editIcon} />
          </div>
          <div className={styles.infoItem}>
            <div>
              <p className={styles.nameText}>Address: </p>
              <p className={styles.nameValue}>
                {user.contactInfo?.phone || 'no addresse'}
              </p>
            </div>
            <img src={Edit} alt="edit" className={styles.editIcon} />
          </div>
          <div className={styles.infoItem}>
            <div>
              <p className={styles.nameText}>Mail-address: </p>
              <p className={styles.nameValue}>{user.email}</p>
            </div>
            <img src={Edit} alt="edit" className={styles.editIcon} />
          </div>
          <div className={styles.infoItem}>
            <div>
              <p className={styles.nameText}>About us /Our mission: </p>
              <p className={styles.nameValue}>
                {user.contactInfo?.mission || 'no mission'}
              </p>
            </div>
            <img src={Edit} alt="edit" className={styles.editIcon} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.infoItem}>
            <div>
              <p className={styles.nameText}>Tel.: </p>
              <p className={styles.nameValue}>
                {user.contactInfo?.phone || 'no phone'}
              </p>
            </div>
            <img src={Edit} alt="edit" className={styles.editIcon} />
          </div>
          <div className={styles.infoItem}>
            <div>
              <p className={styles.nameText}>Social media: </p>
              <div className={styles.socialLinks}>
                {socialLinks.map(({ name, url, icon }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            <img src={Edit} alt="edit" className={styles.editIcon} />
          </div>
          <div className={styles.infoItem}>
            <div>
              <p className={styles.nameText}>Photo: </p>
              <p className={styles.nameValue}>
                {user.contactInfo?.phone || 'no photo'}
              </p>
            </div>
            <img src={Edit} alt="edit" className={styles.editIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
