import './formLogin.scss';

import TextField from '@material-ui/core/TextField';
import State from '../../../../mobX/State';

export const FormLogin = () => {
    return (
        <form noValidate autoComplete="off" className="login-form">
            <div>
                <TextField id="outlined-email" label="Email" type="mail" variant="outlined" onChange={(e) => State.inputEmail(e.target.value)} />
            </div>
            <div>
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    variant="outlined"
                    onChange={(e) => State.inputPassword(e.target.value)}
                />
            </div>
        </form>
    );
};
