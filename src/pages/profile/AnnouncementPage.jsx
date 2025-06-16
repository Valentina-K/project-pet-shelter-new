import { useState } from 'react';
import { useOutletContext } from 'react-router';
import { Outlet, useNavigate } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import styles from './styles.module.css';

function AnnouncementPage() {
  const { user } = useOutletContext();
  const [activeLink, setActiveLink] = useState(null);
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setActiveLink(link);
    navigate(link);
  };

  const handleBackClick = () => {
    setActiveLink(null);
    navigate('/dashboard/announcement');
  };

  return (
    <div>
      {!activeLink ? (
        <ul className={styles.announcementList}>
          <li
            className={styles.announcementItem}
            onClick={() => handleLinkClick('add')}
          >
            Add a new ad
          </li>
          <li
            className={styles.announcementItem}
            onClick={() => handleLinkClick('view')}
          >
            View all ads
          </li>
          <li
            className={styles.announcementItem}
            onClick={() => handleLinkClick('edit')}
          >
            Edit an ad/Add a mark
          </li>
          <li
            className={styles.announcementItem}
            onClick={() => handleLinkClick('hot')}
          >
            Hot ads
          </li>
          <li
            className={styles.announcementItem}
            onClick={() => handleLinkClick('favorite')}
          >
            Favorite
          </li>
        </ul>
      ) : (
        <button onClick={handleBackClick}>
          <TbArrowBackUp className={styles.backIcon} />
        </button>
      )}
      <Outlet context={{ user }} />
    </div>
  );
}

export default AnnouncementPage;
