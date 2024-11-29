import type { IMessage } from 'entities/Message';

/**
 * Интерфейс для свойств компонента MessageItem
 *
 * @message Данные сообщения
 */
export interface IMessageItemProps {
  message: IMessage;
}