import React from 'react';
import styles from './Viewer.module.scss';
import { FadingCircle } from 'better-react-spinkit';

/**
 * 뷰어 컴포넌트
 * @param {string} param0 type: video, image
 * @param {string} url url
 * @param {boolean} loading loading
 */
const Viewer = ({ mediaType, url, loading }) => {
  if (loading) {
    // 로딩중일때 로더 보여주기
    return (
      <div className={styles.viewer}>
        <FadingCircle color="white" size={60} />
      </div>
    );
  }

  if (!url) return null;

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
