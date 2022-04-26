import './contactsTable.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import State from '../../../../mobX/State';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import MenuPopupState from '../menu/Menu2';

export const ContactsTable: React.FC = observer(() => {
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        console.log(State.getContacts());
    }, []);

    return (
        <div className="contacts-table">
            <div className="contacts-table__header">
                <input type="text" className="contacts-table__search" placeholder="Search by Name" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className="contacts-table__btn" onClick={() => State.openAddNewContactModal()}>
                    Add New Contact
                </button>
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="contacts table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Avatar</TableCell>
                            <TableCell>Full name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {State.contacts
                            .filter((el) => el.fullName.toLowerCase().includes(search.toLowerCase()))
                            .map((el) => (
                                <TableRow key={el.id}>
                                    <TableCell component="th" scope="row">
                                        <Avatar alt="" src={el.avatar} />
                                    </TableCell>
                                    <TableCell>{el.fullName}</TableCell>

                                    <TableCell>{el.email}</TableCell>
                                    <TableCell>{el.phone}</TableCell>
                                    <TableCell>
                                        <MenuPopupState id={el.id} />
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
});
