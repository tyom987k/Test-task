import { observer } from 'mobx-react-lite';
import { useEffect, useMemo, useState } from 'react';
import State from '../../../../mobX/State';
import './redactModal.scss';

export const RedactModal: React.FC = observer(() => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const contact = useMemo(() => {
        return State.contacts.filter((el) => {
            if (el.id === State.contactId) {
                console.log(el);
                return el;
            }
        });
    }, []);

    useEffect(() => {
        setName(contact[0].fullName);
        setEmail(contact[0].email);
        setPhone(contact[0].phone);
    }, [contact]);

    const updateContact = (id: string) => {
        if (name) State.putRedactContact(id, name, email, phone);
        else alert('Поле с именен не должно быть пустым');
    };

    const removeContact = (id: string) => {
        const status = confirm('REMOVE?');
        if (status) State.removeContact(id);
    };

    return (
        <div className="redact-modal">
            {contact.map((el) => (
                <div key={el.id} className="redact-modal__box">
                    <input className="redact-modal__item" value={name} onChange={(e) => setName(e.target.value)} />
                    <input className="redact-modal__item" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="redact-modal__item" value={phone} onChange={(e) => setPhone(e.target.value)} />

                    <button className="redact-modal__btn redact__btn" onClick={() => updateContact(el.id)}>
                        REDACT
                    </button>
                    <button className="redact-modal__btn remove__btn" onClick={() => removeContact(el.id)}>
                        REMOVE
                    </button>
                    <button className="redact-modal__btn" onClick={() => State.closeRedactModal()}>
                        EXIT
                    </button>
                </div>
            ))}
            <div className="redact-modal__snack">Успешно отредактирован</div>
        </div>
    );
});
