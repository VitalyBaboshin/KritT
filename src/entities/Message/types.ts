export type TMessage = 'incoming' | 'outgoing';

/**
 * Интерфейс для данных сообщения
 *
 * @id Уникальный идентификатор сообщения
 * @text Текст сообщения
 * @type Тип сообщения: входящее (incoming) или исходящее (outgoing)
 * @date Дата и время отправки сообщения
 * @senderId ID отправителя сообщения (может быть полезен для идентификации)
 */
export interface IMessage {
  id: string;
  text: string;
  type: TMessage;
  date: Date;
  senderId: string;
}