import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth/selectors';
import UserSideBar from '../../components/ProfileComponents/UserSideBar/UserSideBar';
import { Outlet } from 'react-router';
import styles from './styles.module.css';
import Search from '../../components/Search/Search.jsx';
import PageWrapper from '../../layout/PageWrapper/PageWrapper.jsx';
import Container from '../../layout/Container/Container.jsx';

function Dashboard() {
  const { user } = useSelector(selectAuth);
  return (
    <Container>
      <PageWrapper>
        <div className={styles.container}>
          <UserSideBar user={user} />
          <div className={styles.rightBlock}>
            <Search
              onSearch={() => {
                console.log('from search');
              }}
            />
            <Outlet context={{ user }} />
          </div>
        </div>
      </PageWrapper>
    </Container>
  );
}

export default Dashboard;
