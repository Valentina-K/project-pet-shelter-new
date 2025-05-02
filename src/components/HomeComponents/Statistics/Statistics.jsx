import SectionTitle from '../../UI/SectionTitle.jsx';
import styles from './Statistics.module.css';

function Statistics() {
  return (
    <div className={styles.statistics}>
      <SectionTitle text="Statistics" />
      <h3 className={styles.subTitle}>
        Our Shelter – Your Chance to Make a Difference!
      </h3>
      <div className={styles.textWrapper}>
        <p className={styles.text}>
          We are proud to share the significant results we have achieved thanks
          to your unwavering support and compassion. This week alone, we&apos;ve
          received 12,924 donations—each one a powerful testament to your belief
          in our mission. These contributions directly help us provide food,
          shelter, medical care, and rehabilitation for animals in need, giving
          them a second chance at life. Our dedicated team of 5,200 volunteers
          forms the backbone of our organization, with 467 of them actively
          working every day to care for animals, manage rescues, assist with
          adoptions, and provide emotional comfort to those who have suffered
          neglect or abuse.
        </p>
        <p className={styles.text}>
          In addition to this, we are proud to collaborate with 78 trusted
          partner shelters across the country. These partnerships allow us to
          broaden our impact, share resources, and respond faster to emergencies
          and overcrowding situations. Every act of kindness helps transform
          lives. Join our growing community and be part of a powerful movement
          making real change.
        </p>
      </div>
      <div className={styles.statisticsWrapper}>
        <div className={styles.statisticsItem}>
          <h5>Animal</h5>
          <p>12,924</p>
        </div>
        <div className={styles.statisticsItem}>
          <h5>Active Volunteers</h5>
          <p>467</p>
        </div>
        <div className={styles.statisticsItem}>
          <h5>Partner Shelters</h5>
          <p>78</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
