import { observer } from 'mobx-react-lite';
import './app.scss';
import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import State from './mobX/State';
import { useRouters } from './router/Routers';

export const App: React.FC = observer(() => {
    const router = useRouters(State.access);

    if (!State.access) {
        return (
            <div className="App">
                <div className="App_container">{router}</div>
            </div>
        );
    }

    return (
        <div className="App">
            <div className="App_container">
                <header>
                    <Header />
                </header>
                <nav>
                    <Nav />
                </nav>
                <div className="App-body">{router}</div>
            </div>
        </div>
    );
});
