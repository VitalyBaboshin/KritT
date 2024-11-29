import type { IContact } from "../types";

/**
 * Интерфейс для свойств компонента ContactItem
 *
 * @contact Данные контакта
 * @onSelect Функция для обработки выбора контакта
 */

export interface IContactItemProps {
  contact: IContact;
  onSelect: (contact: IContact) => void;
}