import { useState } from 'react';
import PropTypes from 'prop-types';
import imageCompression from 'browser-image-compression';

const PhotoUploader = ({ uploadUrl, userId }) => {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };

    setLoading(true);
    try {
      const compressedFile = await imageCompression(file, options);
      const formData = new FormData();
      formData.append('photo', compressedFile);
      formData.append('userId', userId); // если нужно

      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data?.imageUrl) {
        setPreview(data.imageUrl); // например: "/uploads/users/123/avatar.jpg"
      } else {
        console.warn('Не пришел imageUrl с сервера');
      }
    } catch (error) {
      console.error('Ошибка при загрузке:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <label className="font-semibold">Фото профиля:</label>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {loading && <span>Загрузка...</span>}
      {preview && (
        <img
          src={preview}
          alt="Загруженное фото"
          className="mt-2 rounded-xl w-32 h-32 object-cover border"
        />
      )}
    </div>
  );
};

PhotoUploader.propTypes = {
  uploadUrl: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

export default PhotoUploader;
