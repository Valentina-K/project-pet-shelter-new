import { useOutletContext } from 'react-router';
import { useParams } from 'react-router-dom';
import {
  selectCategories,
  selectIsLoading,
} from '../../../redux/categories/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../../redux/categories/operations';
import { useEffect, useState } from 'react';
//import { addNewAdvertisement } from '../../../redux/advertisements/operations';
import SimpleDropDown from '../../../components/UI/SimpleDropDown/SimpleDropDown';
import styles from './styles.module.css';
import AdForm from '../../../components/ProfileComponents/AdForm/AdForm';
import Section from '../../../layout/Section/Section';

function AddAd() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [initialValues, setInitialValues] = useState(null);
  //const [existingPhotos, setExistingPhotos] = useState([]);
  // const [selectedFiles, setSelectedFiles] = useState([]);
  const categories = useSelector(selectCategories);
  const [animal, setAnimal] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const { user } = useOutletContext();

  useEffect(() => {
    if (categories.length === 0 && !isLoading) {
      dispatch(getCategories());
    } else setAnimal(categories[0]);
  }, [isLoading, categories, dispatch]);

  console.log('categories', categories);
  useEffect(() => {
    if (!id) {
      setInitialValues({
        authorId: user.id,
        title: '',
        description: '',
        categoryId: 1,
        adAttributes: [
          { name: 'breed', value: '' },
          { name: 'age', value: '' },
          { name: 'size', value: '' },
          { name: 'gender', value: '' },
          { name: 'coat_length', value: '' },
          { name: 'color', value: '' },
          { name: 'health_condition', value: '' },
          { name: 'pet_name', value: '' },
        ],
      });
      return;
    }

    /* fetch(`/api/ads/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInitialValues({
          title: data.title,
          description: data.description,
          animalType: data.animalType,
          adAttributes: data.adAttributes,
        });
        setExistingPhotos(data.photoUrls || []);
      }); */
  }, [id, animal, user.id]);

  const handleSubmit = (values, files) => {
    console.log(values, files);
    //setSelectedFiles(files);
  };

  const handleSelectAnimal = (selected) => setAnimal(selected);

  if (!initialValues) return <p>Loading...</p>;
  console.log('animal', animal);

  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.choiseAnimal}>
          <SimpleDropDown options={categories} onChange={handleSelectAnimal} />
        </div>

        <div className={styles.formContainer}>
          {animal && (
            <AdForm
              initialValues={initialValues}
              onSubmit={handleSubmit}
              animal={animal.name}
            />
          )}
        </div>
      </div>
    </Section>
  );
}

export default AddAd;
