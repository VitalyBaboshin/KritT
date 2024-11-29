import { IChat } from "../types";

/**
 * Интерфейс для свойств компонента ChatItem
 *
 * @chat Данные чата
 * @isSelected Указывает, выбран ли текущий чат
 * @onSelect Функция для обработки выбора чата
 */
export interface IChatItemProps {
  chat: IChat;
  isSelected: boolean;
  onSelect: (chatId: string) => void;
}