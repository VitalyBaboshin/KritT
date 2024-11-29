import { FC } from 'react';
import { IChatItemProps } from './types';

import clsx from 'clsx';
import styles from './chatItem.module.css'
import stylesList from 'shared/styles/listItemStyles.module.css'

export const ChatItem: FC<IChatItemProps> = (props) => {
  const { chat, isSelected, onSelect } = props;

  return (
    <div
      className={clsx(styles.dialog, {
        [styles.dialog_active]: isSelected,
      })}
      onClick={() => onSelect(chat.id)}
    >
      <div className={stylesList.list__item_avatar}>
        <img src={chat.avatar || 'default-avatar.png'} alt={`${chat.contactName} avatar`} />
      </div>
      <div className={stylesList.list__item_text}>
        <div className={stylesList.list__item_username}>{chat.contactName}</div>
        <div className={styles.dialog__last}>
          <span className={styles.dialog__last_msg}>{chat.lastMessage}</span>
          <span className={styles.dialog__last_time}>
            {new Date(chat.lastDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};
