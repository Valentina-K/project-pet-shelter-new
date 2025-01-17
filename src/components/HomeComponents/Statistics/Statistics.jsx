import styles from './Statistics.module.css';

function Statistics() {
  return (
    <div className={styles.statistics}>
      <h2 className="sectionTitle">Statistics</h2>
      <h3 className={styles.textTitle}>
        Our Shelter – Your Chance to Make a Difference!
      </h3>
      <div className={styles.textWrapper}>
        <p>
          We are proud to share the significant results we have achieved thanks
          to your support. This week alone, we’ve received 12,924 donations,
          which help us provide the necessary care for our animals. Our team is
          backed by 5,200 volunteers, with 467 of them working actively every
          day to offer the assistance our animals need. Additionally, we
          collaborate with 78 partner shelters, allowing us to expand our reach
          and save even more lives.
          <br />
          <br /> Lorem ipsum dolor sit amet consectetur. Volutpat interdum
          vivamus et placerat viverra fermentum volutpat quis. Non lacus non dui
          sollicitudin massa sit adipiscing ut. Tellus lectus in imperdiet dolor
          bibendum commodo amet cras.
        </p>
        <p>
          Consectetur et urna consequat donec ultrices nulla. Vel in arcu
          maecenas nisi diam. Nulla netus purus nec vulputate cras tellus
          volutpat a. Proin neque quis interdum egestas ac ut sit. Tortor mattis
          mattis egestas mattis quam pellentesque adipiscing. Vulputate aliquam
          sed eu integer cursus vitae quisque. Ultricies elit dui sed bibendum
          velit faucibus pellentesque odio. Tristique consequat dui tempus
          turpis. Fusce euismod vitae nisl lectus ut quam augue. Quam nascetur
          mi a et. Faucibus tincidunt fermentum duis sit vitae lacus.
          <br />
          <br /> Join our community, and together we can make the world a better
          place for those who need it most!
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
