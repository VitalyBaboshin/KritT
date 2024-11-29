import { FC } from 'react';
import type { IContactItemProps } from './types';

import styles from './contactItem.module.css'
import stylesList from 'shared/styles/listItemStyles.module.css'

export const ContactItem: FC<IContactItemProps> = (props) => {
  const { contact, onSelect } = props
  const { name, avatar } = contact;

  const handleOnSelect = () => {
    onSelect(contact);
  }

  return (
    <div className={styles.dialog} onClick={handleOnSelect}>
      <div className={stylesList.list__item_avatar}>
        <img src={avatar} alt={`${name} avatar`} />
      </div>
      <div className={stylesList.list__item_text}>
        <div className={stylesList.list__item_username}>{name}</div>
      </div>
    </div>
  );
};
