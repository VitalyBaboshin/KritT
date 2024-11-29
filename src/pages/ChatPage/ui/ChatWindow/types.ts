import type { IMessage } from 'entities/Message';

/**
 * Интерфейс для свойств компонента ChatWindow
 *
 * @messages Массив сообщений в чате
 * @contactName Имя контакта
 * @contactAvatar URL аватара контакта
 * @onSendMessage Функция для отправки нового сообщения
 */
export interface IChatWindowProps {
  messages: IMessage[];
  contactName: string;
  contactAvatar: string;
  onSendMessage: (messageText: string) => void;
}