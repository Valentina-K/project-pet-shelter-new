import { useState } from 'react';
//import axios from 'axios';
import styles from './SubscriptForm.module.css';
import Button from '../../../UI/Button';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('Thanks for subscribing!');
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
    setEmail('');
    /* try {
      const response = await axios.post('/subscribe', { email });
      setMessage(response.data);
    } catch (error) {
      setMessage('Ошибка при подписке');
    } */
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.title}>Subscribe to the news</h3>
      <input
        type="email"
        placeholder="Your email "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={styles.input}
      />
      <p className={styles.text}>
        Stay updated with our latest stories and tips! Enter your email to
        subscribe to our blog
      </p>
      <Button type="submit" className={styles.button}>
        Subscribe
      </Button>
      {visible && (
        <p
          className={
            visible ? `${styles.hidden} ${styles.thanking}` : styles.thanking
          }
        >
          {message}
        </p>
      )}
    </form>
  );
};

export default SubscriptionForm;
