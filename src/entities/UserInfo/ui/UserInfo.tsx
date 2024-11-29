import { FC } from 'react';
import type { IUserInfoProps } from './types';

import styles from './userInfo.module.css';

export const UserInfo: FC<IUserInfoProps> = (props) => {
  const { name, avatar } = props;

  return (
    <div className={styles.user_info}>
      <div className={styles.user_info_avatar}>
        <img
          src={avatar}
          alt={`${name} avatar`}
          className={styles.user_info_avatar_img}
        />
      </div>
      <div className={styles.user_info_name}>{name}</div>
      <div className={styles.user_info_actions}>
        <button className={styles.action_btn}>📞</button>
        <button className={styles.action_btn}>🎥</button>
        <button className={styles.action_btn}>❤️</button>
      </div>
    </div>
  );
};
