import { FC } from 'react';
import type { IChatListProps } from './types';
import { ChatItem } from 'entities/Chat';

import styles from './chatList.module.css';

export const ChatList: FC<IChatListProps> = (props) => {
  const { chats, selectedChatId, onSelectChat, onNewChat } = props;

  return (
    <div className={styles.chat_left_side}>
      <div className={styles.chat_list_top}>
        <button className={styles.add_chat_btn} onClick={onNewChat}>
          +
        </button>
      </div>

      <div className={styles.chat_list_body}>
        {chats.map((chat) => (
          <ChatItem
            key={chat.id}
            chat={chat}
            isSelected={selectedChatId === chat.id}
            onSelect={onSelectChat}
          />
        ))}
      </div>
    </div>
  );
};
