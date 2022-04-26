const axios = require('axios').default;
import { action, makeAutoObservable } from 'mobx';
import { accessUrl, contactsUrl } from '../api/url';

type UserType = {
    id: string;
    password: string;
};

type LoginResponseType = {
    data: UserType;
};

type ContactsType = {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    avatar: string;
};

type GetContactsType = {
    data: Array<ContactsType>;
};

class State {
    contacts: Array<ContactsType> = [];
    access = false;
    email = '';
    password = '';
    contactId = '';
    openModalRedactContact = false;
    openModalAddNewContact = false;

    constructor() {
        makeAutoObservable(this);
    }

    inputEmail(e: string) {
        this.email = e;
        console.log(this.email);
    }

    inputPassword(e: string) {
        this.password = e;
        console.log(this.password);
    }

    async login() {
        if (this.email && this.password) {
            try {
                const { data }: LoginResponseType = await axios.get(`${accessUrl}/${this.email}`);

                if (data.password === this.password) {
                    action(() => {
                        this.access = true;
                    })();
                } else {
                    alert('Введён неверный пароль!  попробуйте ещё раз!');
                }
                console.log(data.password);
            } catch (error) {
                console.error(error);
                alert('Такого пользователя не существует!');
            }
        } else {
            alert('Введите свой Email и Пароль для авторизации');
        }
    }

    exit() {
        this.access = false;
    }

    async getContacts() {
        try {
            const { data }: GetContactsType = await axios.get(contactsUrl);
            action(() => {
                this.contacts = [...data];
            })();
        } catch (error) {
            console.error(error);
        }
    }

    openRedactModal(id: string) {
        this.openModalRedactContact = true;
        this.contactId = id;
    }

    closeRedactModal() {
        this.openModalRedactContact = false;
    }

    openAddNewContactModal() {
        this.openModalAddNewContact = true;
    }

    closeAddNewContactModal() {
        this.openModalAddNewContact = false;
    }

    async addUser(id: string, fullName: string, email: string, phone: string) {
        try {
            await axios({
                method: 'post',
                url: contactsUrl,
                data: {
                    id,
                    fullName,
                    email,
                    phone,
                },
            });
            const element: HTMLElement | null = document.querySelector('.add-contact-modal__snack');
            if (element) {
                element.style.opacity = '1';
                element.style.zIndex = '2';
                setTimeout(() => {
                    element.style.opacity = '0';
                    element.style.zIndex = '-2';
                }, 2000);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async putRedactContact(id: string, fullName: string, email: string, phone: string) {
        try {
            await axios({
                method: 'put',
                url: `${contactsUrl}/${id}`,
                data: {
                    id,
                    fullName,
                    email,
                    phone,
                },
            });
            const element: HTMLElement | null = document.querySelector('.redact-modal__snack');
            if (element) {
                element.style.opacity = '1';
                element.style.zIndex = '2';
                setTimeout(() => {
                    element.style.opacity = '0';
                    element.style.zIndex = '-2';
                }, 2000);
            }
        } catch (e) {
            console.log(e);
        }
    }

    async removeContact(id: string) {
        try {
            await axios({
                method: 'delete',
                url: `${contactsUrl}/${id}`,
                data: {
                    id,
                },
            });
            this.openModalRedactContact = false;
            this.getContacts();
        } catch (e) {
            console.log(e);
        }
    }
}

export default new State();
