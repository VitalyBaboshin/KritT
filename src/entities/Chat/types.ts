import type { IMessage } from "entities/Message";

/**
import { IMessage } from 'entities/Message';
 * Интерфейс item Chat
 *
 * @id Уникальный идентификатор чата
 * @contactId Уникальный идентификатор контакта
 * @contactName Имя контакта
 * @lastMessage Текст последнего сообщения
 * @lastDate Дата и время последнего сообщения
 * @avatar URL аватара контакта
 */
export interface IChat {
  id: string;
  messages: IMessage[];
  contactId: string;
  contactName: string;
  lastMessage: string;
  lastDate: Date;
  avatar: string;
}