import type { IChat } from "entities/Chat";

/**
 * Интерфейс для свойств компонента ChatList
 *
 * @chats Массив чатов
 * @selectedChatId Идентификатор выбранного чата
 * @onSelectChat Функция для выбора чата
 * @onNewChat Функция для создания нового чата
 */
export interface IChatListProps {
  chats: IChat[];
  selectedChatId: string;
  onSelectChat: (chatId: string) => void;
  onNewChat: () => void;
}