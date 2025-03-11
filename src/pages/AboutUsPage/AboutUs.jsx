import styles from './styles.module.css';
import temporaryImage from '../../assets/img/404-error-web-template-with-cute-dog_23-2147763341.jpg';

function AboutUs() {
  return (
    <div className={styles.wrapper}>
      <div>
        <div>
          <h3>Who we are?</h3>
          <p>
            We are a community-driven platform designed to bridge the gap
            between animals looking for homes and the people who want to help
            them. Whether you are a pet lover searching for a new furry friend,
            a volunteer eager to make an impact, or a shelter seeking support,
            [Platform Name] is here to empower you.
          </p>
          <p>
            Our team is a passionate group of animal advocates who understand
            that collaboration is the key to addressing the challenges faced by
            homeless and abandoned animals. By bringing together individuals and
            organizations from all walks of life, we create a unified front
            dedicated to rescuing, rehabilitating, and rehoming animals.
          </p>
        </div>

        <img src={temporaryImage} alt="#" />
      </div>
      <div>
        <img src={temporaryImage} alt="#" />
        <div>
          <h3>What We Do?</h3>
          <ol>
            <li>
              Connect People and Pets: our platform makes it easy to browse
              profiles of animals in need of a home. With detailed information
              and photos, you can find the perfect match for your family.
            </li>
            <li>
              Support Shelters and Rescues: we work closely with shelters and
              rescue organizations to provide them with tools, visibility, and
              resources to increase their reach and effectiveness.
            </li>
            <li>
              Empower Volunteers: volunteers play a crucial role in animal
              welfare. We help connect willing volunteers with shelters and
              rescue missions that need their help, whether it is fostering,
              fundraising, or providing hands-on care.
            </li>
            <li>
              Raise Awareness: through our platform, we aim to educate and
              inspire people about the importance of adoption, responsible pet
              ownership, and the role each of us can play in making the world a
              better place for animals.
            </li>
          </ol>
        </div>
      </div>
      <div>
        <div>
          <h3>Why We Do It?</h3>
          <p>
            Every year, millions of animals around the world end up in shelters
            or on the streets. Many of them face uncertain futures, but we
            believe that together, we can change that. By uniting efforts, we
            give these animals a second chance at life and a forever home where
            they can thrive.
          </p>
          <h4>Join us</h4>
          <p>
            Whether you are looking to adopt, volunteer, or simply learn more
            about how you can help, [Platform Name] is your partner in making a
            difference. Together, we can create a world where every animal is
            loved, valued, and cared for.
          </p>
        </div>
        <img src={temporaryImage} alt="#" />
      </div>
    </div>
  );
}

export default AboutUs;
