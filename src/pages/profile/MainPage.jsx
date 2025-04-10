import { useDispatch, useSelector } from 'react-redux';
import { FaFacebook, FaTelegram } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { selectAuth } from '../../redux/auth/selectors';
import Edit from '../../assets/img/Edit.png';
import EditModal from '../../components/ProfileComponents/EditModal/EditModal';
import { useEffect, useState } from 'react';
import { updateUser } from '../../redux/auth/operations';
import styles from './styles.module.css';

function MainPage() {
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);
  const [formData, setFormData] = useState({ ...user });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [profileDataId, setProfileDataId] = useState(null);
  const updateDate = user.updatedAt;
  useEffect(() => {
    if (formData.updatedAt !== updateDate) dispatch(updateUser(formData));
  }, [dispatch, formData, updateDate]);

  const handleEdit = (index) => {
    setProfileDataId(index);
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleSave = (value) => {
    setIsEditModalOpen(false);
    switch (profileDataId) {
      case 0:
        setFormData((prev) =>
          updateByPath(prev, 'firstName', value.split(' ')[0])
        );
        setFormData((prev) =>
          updateByPath(prev, 'lastName', value.split(' ')[1])
        );
        break;
      case 1:
        setFormData((prev) => updateByPath(prev, 'contactInfo.website', value));
        break;
      case 2:
        setFormData((prev) => updateByPath(prev, 'email', value));
        break;
      case 3:
        setFormData((prev) => updateByPath(prev, 'contactInfo.mission', value));
        break;
      case 4:
        setFormData((prev) => updateByPath(prev, 'contactInfo.phone', value));
        break;
      case 5:
        setFormData((prev) =>
          updateByPath(prev, 'contactInfo.instagram', value[1].url)
        );
        setFormData((prev) =>
          updateByPath(prev, 'contactInfo.telegram', value[2].url)
        );
        setFormData((prev) =>
          updateByPath(prev, 'contactInfo.facebook', value[0].url)
        );
        break;
      default:
        break;
    }
    setFormData((prev) => ({
      ...prev,
      ['updatedAt']: new Date().toISOString(),
    }));
    console.log(formData);
  };

  function updateByPath(obj, path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();

    const newObj = { ...obj };
    let current = newObj;

    for (const key of keys) {
      current[key] = { ...(current[key] || {}) };
      current = current[key];
    }

    current[lastKey] = value;
    return newObj;
  }

  const socialLinks = [
    {
      name: 'Facebook',
      url: user.contactInfo?.facebook
        ? `https://www.facebook.com/${user.contactInfo.facebook}`
        : 'https://www.facebook.com',
      icon: <FaFacebook className={styles.socialIcon} />,
    },
    {
      name: 'Instagram',
      url: user.contactInfo?.instagram
        ? `https://www.instagram.com/${user.contactInfo.instagram}`
        : 'https://www.instagram.com',
      icon: <RiInstagramFill className={styles.socialIcon} />,
    },
    {
      name: 'Telegram',
      url: user.contactInfo?.telegram
        ? `https://t.me/${user.contactInfo.telegram}`
        : 'https://t.me',
      icon: <FaTelegram className={styles.socialIcon} />,
    },
  ];
  const profileData = [
    { label: 'Name', value: `${formData.firstName} ${formData.lastName}` },
    { label: 'Address', value: formData.contactInfo?.website || 'no address' },
    { label: 'Mail-address', value: formData.email },
    {
      label: 'About us / Our mission',
      value: formData.contactInfo?.mission || 'no mission',
    },
    { label: 'Tel.', value: formData.contactInfo?.phone || 'no phone' },
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
              onClick={() => console.log(6)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
