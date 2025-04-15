import { useOutletContext } from 'react-router';
import styles from './styles.module.css';

function AddAd() {
  const { user } = useOutletContext();
  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add a new ad {user.firstName}</h1>
      <div className={styles.aboutAnimalBlock}>
        <div className={styles.fieldsBlock}>
          <div></div>
          <textarea name="" id=""></textarea>
        </div>
        <div className={styles.fieldsBlock}>
          <input
            type="text"
            name="name"
            placeholder="Pet name"
            onChange={handleChange}
            value={''}
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            onChange={handleChange}
            value={''}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            onChange={handleChange}
            value={''}
          />
          <input
            type="text"
            name="size"
            placeholder="Size"
            onChange={handleChange}
            value={''}
          />
        </div>
      </div>
    </div>
  );
}

export default AddAd;
