import { FC } from 'react';
import type { IMessageItemProps } from './types';
import clsx from 'clsx';
import styles from './messageItem.module.css';

export const MessageItem: FC<IMessageItemProps> = (props) => {
  const { message } = props;

  return (
    <div
      className={clsx(styles.message, {
        [styles.message_in]: message.type === 'incoming',
        [styles.message_out]: message.type === 'outgoing',
      })}
    >
      {message.text}
    </div>
  );
};
