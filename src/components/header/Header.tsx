import './appHeader.scss';
import State from '../../mobX/State';

export const Header: React.FC = () => {
    return (
        <div className="App-header">
            <span>Logo</span>
            <span className="App-header__link" onClick={() => State.exit()}>
                Exit
            </span>
        </div>
    );
};
