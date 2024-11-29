/**
 * Интерфейс для данных контакта
 *
 * @id Уникальный идентификатор контакта
 * @name Имя контакта
 * @avatar URL аватара контакта
 */
export interface IContact {
  id: number;
  name: string;
  avatar: string;
}