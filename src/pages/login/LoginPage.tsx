import { ButtonLogin } from './components/button/ButtonLogin';
import { FormLogin } from './components/form/FormLogin';
import { ServiceLogin } from './components/service/ServiceLogin';
import './login.scss';

export const LoginPage: React.FC = () => {
    return (
        <div className="login-page">
            <div className="login-page__container">
                <span className="login-page__title">Welcome</span>

                <FormLogin />
                <ButtonLogin />
                <ServiceLogin />
            </div>
        </div>
    );
};
