import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import State from '../../../../mobX/State';
import '../redactModal/redactModal.scss';

export const AddContactModal: React.FC = observer(() => {
    console.log('Render rr');

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const addNewContact = () => {
        if (name) {
            const newId: string = new Date().getTime().toString();
            State.addUser(newId, name, email, phone);
        } else {
            alert('Поле Full Name обязательно для заполнения');
        }
    };

    return (
        <div className="redact-modal">
            <div className="redact-modal__box">
                <input className="redact-modal__item" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Full Name" />
                <input className="redact-modal__item" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" type="mail" />
                <input className="redact-modal__item" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone Number" />

                <button className="redact-modal__btn add__btn" onClick={addNewContact}>
                    ADD NEW CONTACT
                </button>
                <button className="redact-modal__btn" onClick={() => State.closeAddNewContactModal()}>
                    EXIT
                </button>
            </div>

            <div className="redact-modal__snack add-contact-modal__snack">Успешно добавлен</div>
        </div>
    );
});
