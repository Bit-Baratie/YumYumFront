'use client';

import React, { useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import ButtonStyle from './reviewItem.module.scss';

const LikeButton = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [notice, setNotice] = useState('');

  const onClick = () => {
    if (isChecked) {
      setIsChecked(false);
      setNotice('');
    } else {
      setIsChecked(true);
      // setNotice('좋아요 1');
    }
  };

  return (
    <>
      {/* <div className='icons-list' onClick={onClick}> */}
      <div className={ButtonStyle.iconsList} onClick={onClick}>
        {isChecked ? (
          <HeartFilled className={ButtonStyle.redBtn} />
        ) : (
          <HeartOutlined className={ButtonStyle.emptyBtn} />
        )}
      </div>
      <p>{notice}</p>
    </>
  );
};

export default LikeButton;
