import React from 'react';
import {
  MdChevronLeft as LeftIcon,
  MdChevronRight as RightIcon
} from 'react-icons/md';
import styles from './SpaceNavigator.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * 네비게이터 컴포넌트
 * @param {function} onPrev 뒤로 가기
 * @param {function} onNext 앞으로 가기
 */
const SpaceNavigator = ({ onPrev, onNext }) => {
  return (
    <div className={cx('space_navigator')}>
      <div className={cx('left', 'end')}>
        <div className={cx('circle')} onClick={onPrev}>
          <LeftIcon />
        </div>
      </div>
      <div className={[styles.right, styles.end].join(' ')}>
        <div className={cx('circle')} onClick={onNext}>
          <RightIcon />
        </div>
      </div>
    </div>
  );
};

export default SpaceNavigator;
