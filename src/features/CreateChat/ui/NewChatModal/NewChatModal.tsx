import { FC } from 'react';
import { ContactItem } from 'entities/Contact';
import type { ICreateChatProps } from './types';

import styles from './newChatModal.module.css';

export const NewChatModal: FC<ICreateChatProps> = (props) => {
  const { contacts, onClose, onSelectContact } = props;

  return (
    <div className={styles.modal_backdrop} style={{ display: 'block' }}>
      <div className={styles.modal}>
        <div className={styles.modal_head}>
          <span className={styles.modal_title}>Choose contact</span>
          <span className={styles.modal_close} onClick={onClose}>×</span>
        </div>
        <div className={styles.modal_body}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onSelect={onSelectContact}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
