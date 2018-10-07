import React from 'react';
import styles from './Viewer.module.scss';

/**
 * 뷰어 컴포넌트
 * @param {string} param0 type: video, image
 * @param {string} url url
 * @param {boolean} loading loading
 */
const Viewer = ({ mediaType, url, loading }) => {
  return (
    <div className={styles.viewer}>
      {mediaType === 'image' ? (
        <img onClick={() => window.open(url)} src={url} alt="space" />
      ) : (
        <iframe
          title="space-video"
          src={url}
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default Viewer;
