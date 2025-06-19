import { Formik } from 'formik';
import PropTypes from 'prop-types';
import attributesData from '../../../models/attributes.json';
import { useState } from 'react';
import PhotoUploader from '../../PhotoUploader/PhotoUploader';
import CharacteristicDropDown from '../../UI/SimpleDropDown/CharacteristicDropDown';
import Button from '../../../components/UI/Button';
import styles from './AdForm.module.css';

export default function AdForm({
  initialValues,
  onSubmit,
  /* existingPhotos = [], */
  animal,
}) {
  const [selectedCompressedPhotos, setSelectedCompressedPhotos] = useState([]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, formikHelpers) => {
        formikHelpers.setSubmitting(true);
        try {
          const files = selectedCompressedPhotos.map((item) => item.file);
          await onSubmit(values, files, []);
          formikHelpers.resetForm(); // <--- очищает форму
          setSelectedCompressedPhotos([]);
        } catch (error) {
          console.log(error);
        } finally {
          formikHelpers.setSubmitting(false);
        }
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.aboutAnimalBlock}>
            <div className={styles.fieldsBlock}>
              <PhotoUploader
                photos={selectedCompressedPhotos}
                setPhotos={setSelectedCompressedPhotos}
              />
              <div>
                <input
                  value={
                    values.adAttributes.find((attr) => attr.name === 'pet_name')
                      ?.value || ''
                  }
                  onChange={(e) => {
                    const updated = values.adAttributes.map((attr) =>
                      attr.name === 'pet_name'
                        ? { ...attr, value: e.target.value }
                        : attr
                    );
                    setFieldValue('adAttributes', updated);
                  }}
                  placeholder="Pet name:"
                />
              </div>
              <div>
                <input
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  placeholder="Title:"
                />
              </div>
              <div>
                <textarea
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  placeholder="About animal"
                  className={styles.description}
                />
              </div>
            </div>
            <div className={styles.fieldsBlock}>
              {values.adAttributes.map((attr) => {
                if (attr.name === 'pet_name') return null;
                const options =
                  attr.name === 'breed'
                    ? attributesData.breed[`${animal}`].en
                    : attributesData[attr.name].en;

                return (
                  <div key={attr.name}>
                    <CharacteristicDropDown
                      name={attr.name}
                      value={attr.value}
                      options={options}
                      placeholder={attr.name}
                      onChange={(name, selectedValue) => {
                        const updatedAttributes = values.adAttributes.map(
                          (item) =>
                            item.name === name
                              ? { ...item, value: selectedValue }
                              : item
                        );
                        setFieldValue('adAttributes', updatedAttributes);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <Button
            type="submit"
            className={styles.publishButton}
            disabled={isSubmitting}
          >
            Publish
          </Button>
        </form>
      )}
    </Formik>
  );
}

AdForm.propTypes = {
  initialValues: PropTypes.shape(),
  onSubmit: PropTypes.func,
  existingPhotos: PropTypes.array,
  animal: PropTypes.string,
};
