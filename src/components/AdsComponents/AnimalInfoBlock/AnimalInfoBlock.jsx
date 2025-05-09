import styles from './styles.module.css';
import SectionTitle from '../../UI/SectionTitle';
import Button from '../../UI/Button';
import { BsGenderMale } from 'react-icons/bs';
import { IoPawSharp } from 'react-icons/io5';
import { LiaDogSolid } from 'react-icons/lia';
import PropTypes from 'prop-types';

function AnimalInfoBlock({ animal }) {
  return (
    <div className={styles.wrapper}>
      <SectionTitle text="Pet Name" />
      <div className={styles.jettons}>
        <div className={styles.jetton}>
          <span className={styles.label}>Age</span>
          <IoPawSharp className={styles.icon} />
          <SectionTitle text={animal.age} />
        </div>
        <div className={styles.jetton}>
          <span className={styles.label}>Gender</span>
          <BsGenderMale className={styles.icon} />
          <SectionTitle text={animal.gender} />
        </div>
        <div className={styles.jetton}>
          <span className={styles.label}>Size</span>
          <LiaDogSolid className={styles.icon} />
          <SectionTitle text={animal.size} />
        </div>
      </div>
      <p className={styles.description}>{animal.description}</p>
      <Button>Adopt Friend</Button>
    </div>
  );
}

AnimalInfoBlock.propTypes = {
  animal: PropTypes.shape({
    age: PropTypes.string,
    gender: PropTypes.string,
    size: PropTypes.string,
    description: PropTypes.string,
  }),
};
export default AnimalInfoBlock;
