import { useNavigate } from 'react-router';
import Button from '../../UI/Button.jsx';
import Section from '../../../layout/Section/Section.jsx';
import styles from './JoinUsSection.module.css';

function JoinUsSection() {
  const navigate = useNavigate();
  const handleJoinUs = () => {
    navigate('/sign-in');
  };
  return (
    <Section>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Join our team and change animals lives for
          <br />
          the better! Together we can do more!
        </h2>
        <Button className={styles.button} onClick={handleJoinUs}>
          Join us
        </Button>
      </div>
    </Section>
  );
}

export default JoinUsSection;
