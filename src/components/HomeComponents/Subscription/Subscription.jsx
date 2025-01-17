import SubscriptionForm from './SubsriptForm/SubscriptForm';
import image from '../../../assets/img/subscript.png';
import styles from './Subscription.module.css';

function Subscription() {
  return (
    <div className={styles.subscription}>
      <img src={image} alt="subscription" className={styles.image} />
      <div className={styles.container}>
        <h3 className={styles.title}>Subscribe to the news</h3>
        <SubscriptionForm />
        <p className={styles.text}>
          Stay updated with our latest stories and tips! Enter your email to
          subscribe to our blog
        </p>
      </div>
    </div>
  );
}

export default Subscription;
