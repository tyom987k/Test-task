import Button from '@material-ui/core/Button';
import State from '../../../../mobX/State';
import './buttonLogin.scss';

export const ButtonLogin: React.FC = () => {
    return (
        <div className="ButtonLogin__btn">
            <Button variant="contained" size="large" color="primary" onClick={() => State.login()}>
                LOGIN
            </Button>
        </div>
    );
};
