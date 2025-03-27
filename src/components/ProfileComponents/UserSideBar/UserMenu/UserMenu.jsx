import { MdOutlineMessage } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';
import { IoSettingsOutline } from 'react-icons/io5';
import MenuItem from './MenuItem.jsx';
import styles from './UserMenu.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function UserMenu() {
  const [activeIndex, setActiveIndex] = useState(null);
  const items = [
    { image: <RxAvatar />, text: 'Main', className: '' },
    { image: <AiOutlineMail />, text: 'Messages', className: '' },
    { image: <MdOutlineMessage />, text: 'Announcement', className: '' },
    { image: <IoSettingsOutline />, text: 'Settings', className: '' },
  ];
  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <ul className={styles.container}>
      {items.map((Item, index) => (
        <li key={index} onClick={() => handleItemClick(index)}>
          <NavLink to={`/dashboard/${Item.text.toLowerCase()}`}>
            <MenuItem
              className={index === activeIndex ? `${styles.active}` : ''}
              text={Item.text}
              image={Item.image}
            />
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default UserMenu;
