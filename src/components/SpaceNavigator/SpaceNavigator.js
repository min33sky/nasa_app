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
 * @param {boolean} endDate 마지막 날 체크
 */
const SpaceNavigator = ({ onPrev, onNext, endDate }) => {
  return (
    <div className={cx('space_navigator')}>
      <div className={[styles.left, styles.end].join(' ')}>
        <div className={cx('circle')} onClick={onPrev}>
          <LeftIcon />
        </div>
      </div>

      {// 마지막 날일 경우 표시 안함
        !endDate ? (
          <div className={cx('right', 'end')}>
            <div className={cx('circle')} onClick={onNext}>
              <RightIcon />
            </div>
          </div>
        ) : null}
    </div>
  );
};

export default SpaceNavigator;
