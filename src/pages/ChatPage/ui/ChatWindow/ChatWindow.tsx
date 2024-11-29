import { FC, useState } from 'react';
import type { IChatWindowProps } from './types';
import { MessageList } from '../MessageList';
import { UserInfo } from 'entities/UserInfo';
import SendIcon from 'assets/icons/send.svg'

import styles from './chatWindow.module.css';

export const ChatWindow: FC<IChatWindowProps> = (props) => {
  const { messages, onSendMessage, contactName, contactAvatar } = props;
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = () => {
    if (messageText.trim()) {
      onSendMessage(messageText);
      setMessageText('');
    }
  };

  return (
    <div className={styles.chat_right_side}>
      <div className={styles.chat_content}>
        <UserInfo name={contactName} avatar={contactAvatar} />
        <div className={styles.chat_room}>
          <MessageList messages={messages} />
          <div className={styles.chat_room_footer}>
            <input
              type="text"
              className={styles.input_field}
              placeholder="Write Message ..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button className={styles.send_btn} onClick={handleSendMessage}>
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
