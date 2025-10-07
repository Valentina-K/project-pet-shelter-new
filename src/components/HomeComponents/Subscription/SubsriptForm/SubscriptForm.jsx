import { useState } from 'react';
//import axios from 'axios';
import { useTranslation } from 'react-i18next';
import styles from './SubscriptForm.module.css';
import Button from '../../../UI/Button';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const { t } = useTranslation();
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
      <h3 className={styles.title}>{t('home.subscription.h2')}</h3>
      <div>
        <input
          type="email"
          placeholder={t('home.subscription.placeholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <p className={styles.text}>{t('home.subscription.description')}</p>
      </div>
      <Button type="submit" className={styles.button}>
        {t('home.subscription.button')}
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
