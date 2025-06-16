import PropTypes from 'prop-types';

function buildAdFormData(adData, photoFiles, adAttributes) {
  const formData = new FormData();

  // Добавляем обычные поля
  Object.entries(adData).forEach(([key, value]) => {
    formData.append(key, String(value));
  });

  // Добавляем фото
  photoFiles.forEach((file) => {
    formData.append('photoFiles', file); // повторяющееся поле
  });

  // Добавляем атрибуты — ВАРИАНТ 1: JSON
  formData.append('adAttributes', JSON.stringify(adAttributes));

  // Если вдруг понадобится ВАРИАНТ 2 (индексация):
  // adAttributes.forEach((attr, index) => {
  //   formData.append(`adAttributes[${index}].name`, attr.name);
  //   formData.append(`adAttributes[${index}].value`, attr.value);
  // });

  return formData;
}

buildAdFormData.propTypes = {
  adData: PropTypes.shape({
    authorId: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    categoryId: PropTypes.number,
  }),
  photoFiles: PropTypes.array,
  adAttributes: PropTypes.arrayOf({
    name: PropTypes.string,
    value: PropTypes.string,
  }),
};

export default buildAdFormData;
