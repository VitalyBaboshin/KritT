import type { IMessage } from 'entities/Message';

/**
 * Интерфейс для свойств компонента MessageList
 *
 * @messages Массив сообщений
 */
export interface IMessageListProps {
  messages: IMessage[];
}