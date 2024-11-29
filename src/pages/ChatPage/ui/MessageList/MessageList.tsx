import { FC } from 'react';
import { MessageItem } from 'entities/Message';

import styles from './messageList.module.css';
import type { IMessageListProps } from './types';

export const MessageList: FC<IMessageListProps> = (props) => {
  const { messages } = props;

  return (
    <div className={styles.chat_room_messages}>
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
};
