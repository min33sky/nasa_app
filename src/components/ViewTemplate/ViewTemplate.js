import React from 'react';
import styles from './ViewTemplate.module.scss';

const ViewTemplate = ({ viewer, spaceNavigator }) => {
  return (
    <div className={styles.viewer_template}>
      <header>Astronomy Picture of the Day</header>
      <div className={styles.viewer_wrapper}>
        {viewer}
        <div className={styles.space_navigator_wrapper}>{spaceNavigator}</div>
      </div>
    </div>
  );
};

export default ViewTemplate;
