import { RiDeleteBinLine } from 'react-icons/ri';

import PropTypes from 'prop-types';
import style from './styles.module.css';

function MiniCard({ ad }) {
  return (
    <div className={style.wrapper}>
      <div className={style.leftBlock}>
        <img
          src="https://images.dog.ceo/breeds/poodle-medium/WhatsApp_Image_2022-08-06_at_4.48.38_PM.jpg"
          alt="image"
        />
      </div>
      <div className={style.rightBlock}>
        <h3>{ad.adAttributes[7].value}</h3>
        <p>{ad.description}</p>
        <button className={style.bin}>
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
}

MiniCard.propTypes = {
  ad: PropTypes.shape({
    id: PropTypes.number,
    authorId: PropTypes.number,
    description: PropTypes.string,
    adAttributes: PropTypes.arrayOf(PropTypes.object),
    thumbnail: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MiniCard;
