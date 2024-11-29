import React, { useState, useEffect } from 'react';
import { ChatList } from './ui/ChatList';
import { NewChatModal } from 'features/CreateChat';
import { presetUsers } from 'data/presetUsers';
import { ChatWindow } from './ui/ChatWindow/ChatWindow';
import type { IChat } from 'entities/Chat';
import type { IContact } from 'entities/Contact/types';

import { uuidv4 } from 'utils/generateUUID';

import styles from './chat.module.css'
// Задаем ключ для хранения данных чатов в LocalStorage
const LOCAL_STORAGE_KEY = 'chats';

const createInitChats = (): IChat[] => {
  const storedChats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  return storedChats ? storedChats : []
}

export const Chat = () => {
  const [chats, setChats] = useState<IChat[]>(createInitChats());
  const [selectedChatId, setSelectedChatId] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Сохранение чатов в LocalStorage при изменении состояния чатов
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(chats));
  }, [chats]);

  const handleSelectChat = (chatId: string) => {
    setSelectedChatId(chatId);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Создание нового чата или выбор существующего
  const createOrSelectChat = (contact: IContact) => {
    let chat: IChat = chats.find((chat) => chat.contactName === contact.name);
    if (!chat) {
      // Если чат с этим контактом еще не существует, создаем новый
      chat = {
        id: uuidv4(),
        contactName: contact.name,
        messages: [
          {
            id: uuidv4(),
            text: 'Привет! Это предустановленное сообщение.',
            type: 'incoming',
            date: new Date(),
            senderId: contact.id
          }
        ],
        lastMessage: 'Привет! Это предустановленное сообщение.',
        lastDate: new Date(),
        avatar: contact.avatar
      };
      setChats([chat, ...chats]);
    }
    setSelectedChatId(chat.id);
    setIsModalOpen(false);
  };

  const sendMessage = (text) => {
    setChats((prevChats) =>
      prevChats.map((chat) => {
        if (chat.id === selectedChatId) {
          const newMessage = { text, type: 'outgoing', date: new Date() };
          const updatedChat = {
            ...chat,
            messages: [...chat.messages, newMessage],
            lastMessage: text,
            lastDate: new Date(),
          };
          return updatedChat;
        }
        return chat;
      }).sort((a, b) => new Date(b.lastDate) - new Date(a.lastDate))
    );
  };

  // Получение текущего чата
  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  return (
    <div className={styles.chat_container}>
      <ChatList
        chats={chats}
        selectedChatId={selectedChatId}
        onSelectChat={handleSelectChat}
        onNewChat={toggleModal}
      />
      {selectedChat ? (
        <ChatWindow
          contactName={selectedChat.contactName}
          contactAvatar={selectedChat.avatar}
          messages={selectedChat.messages}
          onSendMessage={sendMessage}
        />
      ) : (
        <div className="chat-placeholder">Выберите чат для начала общения</div>
      )}
      {isModalOpen && <NewChatModal
        contacts={presetUsers}
        onClose={toggleModal}
        onSelectContact={createOrSelectChat}
      />}
    </div>
  );
}
