import './serviceLogin.scss';

export const ServiceLogin = () => {
    return (
        <ul>
            <li>
                <span>Forgot </span>
                <span className="service-login__link">Email / Password?</span>
            </li>
            <li>
                <span>Do not have account? </span>
                <span className="service-login__link">Sign Up</span>
            </li>
            <li className="service-login__email">
                <span>Email: test@gmail.com</span>
            </li>
            <li>
                <span>Password: 12345</span>
            </li>
        </ul>
    );
};
