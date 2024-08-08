import React, { useState, useEffect } from 'react';
import { fetchPhotos } from './unsplashService';

const PhotoGrid = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const data = await fetchPhotos();
        setPhotos(data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPhotos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.grid}>
      {photos.map(photo => (
        <div key={photo.id} style={styles.card}>
          <img src={photo.urls.small} alt={photo.alt_description} style={styles.image} />
          <div style={styles.details}>
            <p>{photo.user.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '15px',
  },
  details: {
    position: 'absolute',
    bottom: '8px',
    left: '8px',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '4px 8px',
    borderRadius: '15px',
  },
};

export default PhotoGrid;
