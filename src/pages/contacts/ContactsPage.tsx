import { observer } from 'mobx-react-lite';
import State from '../../mobX/State';
import { AddContactModal } from './components/addContactModal/AddContactModal';
import { ContactsTable } from './components/contactsTable/ContactsTable';
import { RedactModal } from './components/redactModal/RedactModal';

export const ContactsPage: React.FC = observer(() => {
    if (State.openModalAddNewContact) {
        return <AddContactModal />;
    }

    if (State.openModalRedactContact) {
        return <RedactModal />;
    }

    return (
        <div>
            <ContactsTable />
        </div>
    );
});
