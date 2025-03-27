import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth/selectors';
import UserSideBar from '../../components/ProfileComponents/UserSideBar/UserSideBar';
import { Outlet } from 'react-router';
import styles from './styles.module.css';
import Search from '../../components/Search/Search.jsx';

function Dashboard() {
  const { user } = useSelector(selectAuth);
  return (
    <div className={styles.container}>
      <UserSideBar user={user} />
      <div className={styles.rightBlock}>
        <Search
          onSearch={() => {
            console.log('from search');
          }}
        />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
