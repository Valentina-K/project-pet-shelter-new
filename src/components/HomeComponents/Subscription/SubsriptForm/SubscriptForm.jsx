import { useState } from 'react';
//import axios from 'axios';
import styles from './SubscriptForm.module.css';

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
      <input
        type="email"
        placeholder="Your email "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Subscribe
      </button>
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
