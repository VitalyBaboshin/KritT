import type { IContact } from "entities/Contact/types";

/**
 * Интерфейс для свойств компонента CreateChat
 *
 * @contacts Список контактов, доступных для создания чата
 * @onClose Функция для закрытия модального окна
 * @onSelectContact Функция для выбора контакта и создания нового чата
 */
export interface ICreateChatProps {
  contacts: IContact[];
  onClose: () => void;
  onSelectContact: (contact: IContact) => void;
}