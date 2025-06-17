import { useState } from 'react';
import imageCompression from 'browser-image-compression';
import { BiMessageSquareEdit } from 'react-icons/bi';
import PropTypes from 'prop-types';
import styles from './PhotoUploader.module.css';

export default function PhotoUploader({
  photos = [],
  setPhotos,
  existingPhotos = [],
  onDelete,
}) {
  const [loadingIds, setLoadingIds] = useState([]);
  const [isInputFile, setIsInputFile] = useState(false);

  const compressFile = async (file) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1200,
      useWebWorker: true,
    };
    return imageCompression(file, options);
  };

  const handleFiles = async (files) => {
    const previews = [];

    for (const file of files) {
      const id = `local-${Date.now()}-${Math.random()}`;
      setLoadingIds((prev) => [...prev, id]);

      const compressed = await compressFile(file);

      previews.push({
        id,
        url: URL.createObjectURL(file),
        file: compressed,
      });

      setLoadingIds((prev) => prev.filter((l) => l !== id));
    }

    setPhotos((prev) => [...prev, ...previews]);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleDeleteLocal = (id) => {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
  };

  const handleReplaceServer = async (serverId) => {
    const file = await selectFile();
    if (!file) return;

    const compressed = await compressFile(file);
    const id = `local-${Date.now()}-${Math.random()}`;

    onDelete(serverId); // удалить фото с сервера
    setPhotos((prev) => [
      ...prev,
      {
        id,
        url: URL.createObjectURL(file),
        file: compressed,
      },
    ]);
  };

  const selectFile = () => {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = () => {
        const file = input.files[0];
        resolve(file);
      };
      input.click();
    });
  };

  const handleInputFileClick = () => setIsInputFile(!isInputFile);

  return (
    <div className={styles.wrapper}>
      <BiMessageSquareEdit
        onClick={handleInputFileClick}
        className={styles.inputIcon}
      />
      {isInputFile && (
        <>
          <label htmlFor="file-upload" className={styles.inputPhotos}>
            Choise photos
          </label>
          <input
            id="file-upload"
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileInput}
            style={{
              position: 'absolute',
              width: '0',
              opacity: '0',
            }}
          />
        </>
      )}
      <h3 className={styles.blockTitle}>Photo: </h3>
      <div className={styles.photosContainer}>
        {existingPhotos.map((photo) => (
          <div key={`server-${photo.id}`} style={{ position: 'relative' }}>
            <img src={photo.url} alt="server" className={styles.previewImage} />
            <button
              type="button"
              onClick={() => onDelete(photo.id)}
              title="Remove"
              className={styles.buttonStyle}
            >
              ×
            </button>
            <button
              type="button"
              onClick={() => handleReplaceServer(photo.id)}
              title="Update"
              className={styles.buttonStyle}
              style={{ background: 'blue', top: '25' }}
            >
              ↻
            </button>
          </div>
        ))}

        {photos.map((photo) => (
          <div key={photo.id} style={{ position: 'relative' }}>
            <img
              src={photo.url}
              alt="preview"
              className={styles.previewImage}
            />
            {loadingIds.includes(photo.id) && (
              <div className={styles.loadingOverlay}>Loading...</div>
            )}
            <button
              type="button"
              onClick={() => handleDeleteLocal(photo.id)}
              className={styles.buttonStyle}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

PhotoUploader.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string,
    })
  ),
  existingPhotos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
  setPhotos: PropTypes.func,
};
