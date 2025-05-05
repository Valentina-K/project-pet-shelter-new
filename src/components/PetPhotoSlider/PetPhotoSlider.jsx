import { useState } from 'react';
import dog from '../../assets/img/dog.png';
import smallDog from '../../assets/img/smallDog.png';
import cat from '../../assets/img/whiteCat.png';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const imgPath = [dog, smallDog, cat];

function PetPhotoSlider({ photos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(photos);
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.bigImage}
        src={imgPath[currentIndex]}
        alt={photos[currentIndex].altText}
      />
      <div className={styles.imgContainer}>
        {photos &&
          photos.map((img, index) => (
            <img
              className={styles.smallImage}
              key={index}
              src={imgPath[index]}
              alt={img.altText}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
      </div>
    </div>
  );
}
PetPhotoSlider.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      altText: PropTypes.string,
    })
  ),
};
export default PetPhotoSlider;

/* new URL(`../assets/img/${img.filename}`, import.meta.url).href */
