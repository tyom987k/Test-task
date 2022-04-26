import { Link } from 'react-router-dom';
import './appNav.scss';

export const Nav = () => {
    return (
        <div>
            <Link to="/contacts" className="App-nav" id="ContactsTable">
                <div className="App-nav__container">Contacts</div>
            </Link>
            <Link to="/tasks" className="App-nav">
                <div className="App-nav__container" id="TasksPage">
                    Tasks
                </div>
            </Link>
            <Link to="/options" className="App-nav" id="OptionsPage">
                <div className="App-nav__container">Options</div>
            </Link>
        </div>
    );
};
