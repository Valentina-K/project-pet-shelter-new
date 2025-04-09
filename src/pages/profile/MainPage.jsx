import { useSelector } from 'react-redux';
import { FaFacebook, FaTelegram } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { selectAuth } from '../../redux/auth/selectors';
import Edit from '../../assets/img/Edit.png';
import styles from './styles.module.css';
import EditModal from '../../components/ProfileComponents/EditModal/EditModal';
import { useState } from 'react';
// import { useState } from 'react';

function MainPage() {
  const { user } = useSelector(selectAuth);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [profileDataId, setProfileDataId] = useState(null);

  const handleEdit = (index) => {
    const profileItem = profileData[index];
    setProfileDataId(index);
    console.log('Profile item:', profileItem);
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleSave = (value) => {
    console.log('Saved value:', value);
    setIsEditModalOpen(false);
  };
  /*  
  const formData = new FormData();
formData.append("name", "Анна");
  const dispatch = useDispatch();
  
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
  const profileData = [
    { label: 'Name', value: `${user.firstName} ${user.lastName}` },
    { label: 'Address', value: user.contactInfo?.address || 'no address' },
    { label: 'Mail-address', value: user.email },
    {
      label: 'About us / Our mission',
      value: user.contactInfo?.mission || 'no mission',
    },
    { label: 'Tel.', value: user.contactInfo?.phone || 'no phone' },
    {
      label: 'Social media:',
      value: socialLinks.length > 0 ? socialLinks : [],
    },
  ];
  return (
    <div className={styles.pageSection}>
      {isEditModalOpen && (
        <EditModal
          profileDataId={profileDataId}
          userInfo={profileData[profileDataId]}
          handleSave={handleSave}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
      <h2 className={styles.title}>About me</h2>
      <div className={styles.infoBlock}>
        <div className={styles.left}>
          <div className={styles.infoItem}>
            <div>
              <p className={styles.nameText}>Name: </p>
              <p className={styles.nameValue}>{profileData[0].value}</p>
            </div>
            <img
              src={Edit}
              alt="edit"
              className={styles.editIcon}
              onClick={() => handleEdit(0)}
            />
          </div>
          <div className={styles.infoItem}>
            <div>
              <p className={styles.nameText}>Address: </p>
              <p className={styles.nameValue}>{profileData[1].value}</p>
            </div>
            <img
              src={Edit}
              alt="edit"
              className={styles.editIcon}
              onClick={() => handleEdit(1)}
            />
          </div>
          <div className={styles.infoItem}>
            <div>
              <p className={styles.nameText}>Mail-address: </p>
              <p className={styles.nameValue}>{profileData[2].value}</p>
            </div>
            <img
              src={Edit}
              alt="edit"
              className={styles.editIcon}
              onClick={() => handleEdit(2)}
            />
          </div>
          <div className={styles.infoItem}>
            <div>
              <p className={styles.nameText}>About us /Our mission: </p>
              <p className={styles.nameValue}>{profileData[3].value}</p>
            </div>
            <img
              src={Edit}
              alt="edit"
              className={styles.editIcon}
              onClick={() => handleEdit(3)}
            />
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
            <img
              src={Edit}
              alt="edit"
              className={styles.editIcon}
              onClick={() => handleEdit(4)}
            />
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
            <img
              src={Edit}
              alt="edit"
              className={styles.editIcon}
              onClick={() => handleEdit(5)}
            />
          </div>
          <div className={styles.infoItem}>
            <div>
              <p className={styles.nameText}>Photo: </p>
              <p className={styles.nameValue}>
                {user.contactInfo?.phone || 'no photo'}
              </p>
            </div>
            <img
              src={Edit}
              alt="edit"
              className={styles.editIcon}
              onClick={() => handleEdit(6)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
