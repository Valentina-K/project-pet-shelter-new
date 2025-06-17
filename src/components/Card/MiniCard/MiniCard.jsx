import { RiDeleteBinLine } from 'react-icons/ri';
import style from './styles.module.css';

function MiniCard() {
  return (
    <div className={style.wrapper}>
      <div className={style.leftBlock}>
        <img
          src="https://images.dog.ceo/breeds/poodle-medium/WhatsApp_Image_2022-08-06_at_4.48.38_PM.jpg"
          alt="image"
        />
      </div>
      <div className={style.rightBlock}>
        <h3>Pet name</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod
          temor incididunt utla bore et dolo....
        </p>
        <button className={style.bin}>
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
}

export default MiniCard;
