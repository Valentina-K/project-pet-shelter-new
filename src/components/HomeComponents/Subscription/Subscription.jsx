import SubscriptionForm from './SubsriptForm/SubscriptForm';
import Section from '../../../layout/Section/Section';
import styles from './Subscription.module.css';

function Subscription() {
  return (
    <Section>
      <div className={styles.subscription}>
        <SubscriptionForm />
      </div>
    </Section>
  );
}

export default Subscription;
