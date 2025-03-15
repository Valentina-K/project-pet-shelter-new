import styles from './styles.module.css';
import temporaryImage from '../../assets/img/subscript.png';
import JoinUsSection from '../../components/HomeComponents/JoinUsSection/JoinUsSection.jsx';

function AboutUs() {
  const text =
    'Join our team and change animals lives for the better! Together we can do more!';
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.maintitle}>Uniting People to Help Animals</h1>
      <p className={styles.preview}>
        At [Platform Name], we believe that every animal deserves a loving home
        and a chance at a better life. Our mission is simple yet profound: to
        connect compassionate individuals, dedicated volunteers, and caring
        shelters in one seamless platform that makes a real difference in the
        lives of animals in need.
      </p>
      <div className={styles.hero}></div>
      <div className={styles.section}>
        <div className={styles.textBlock}>
          <h3 className={styles.title}>Who we are?</h3>
          <p className={styles.text}>
            We are a community-driven platform designed to bridge the gap
            between animals looking for homes and the people who want to help
            them. Whether you are a pet lover searching for a new furry friend,
            a volunteer eager to make an impact, or a shelter seeking support,
            [Platform Name] is here to empower you.
          </p>
          <p className={styles.text}>
            Our team is a passionate group of animal advocates who understand
            that collaboration is the key to addressing the challenges faced by
            homeless and abandoned animals. By bringing together individuals and
            organizations from all walks of life, we create a unified front
            dedicated to rescuing, rehabilitating, and rehoming animals.
          </p>
        </div>

        <img className={styles.image} src={temporaryImage} alt="#" />
      </div>
      <div className={styles.section}>
        <img className={styles.image} src={temporaryImage} alt="#" />
        <div className={styles.textBlock}>
          <h3 className={styles.title}>What We Do?</h3>
          <div>
            <p className={styles.text}>
              1. Connect People and Pets: our platform makes it easy to browse
              profiles of animals in need of a home. With detailed information
              and photos, you can find the perfect match for your family.
            </p>
            <p className={styles.text}>
              2. Support Shelters and Rescues: we work closely with shelters and
              rescue organizations to provide them with tools, visibility, and
              resources to increase their reach and effectiveness.
            </p>
            <p className={styles.text}>
              3. Empower Volunteers: volunteers play a crucial role in animal
              welfare. We help connect willing volunteers with shelters and
              rescue missions that need their help, whether it is fostering,
              fundraising, or providing hands-on care.
            </p>
            <p className={styles.text}>
              4. Raise Awareness: through our platform, we aim to educate and
              inspire people about the importance of adoption, responsible pet
              ownership, and the role each of us can play in making the world a
              better place for animals.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.textBlock}>
          <h3 className={styles.title}>Why We Do It?</h3>
          <p className={styles.text}>
            Every year, millions of animals around the world end up in shelters
            or on the streets. Many of them face uncertain futures, but we
            believe that together, we can change that. By uniting efforts, we
            give these animals a second chance at life and a forever home where
            they can thrive.
          </p>
          <h3 className={styles.title}>Join us</h3>
          <p className={styles.text}>
            Whether you are looking to adopt, volunteer, or simply learn more
            about how you can help, [Platform Name] is your partner in making a
            difference. Together, we can create a world where every animal is
            loved, valued, and cared for.
          </p>
        </div>
        <img className={styles.image} src={temporaryImage} alt="#" />
      </div>
      <JoinUsSection text={text} />
    </div>
  );
}

export default AboutUs;
