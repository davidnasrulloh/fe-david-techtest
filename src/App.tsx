import { Provider } from 'react-redux'
import './App.css'
import SetupRoutes from './routers'
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import {useEffect, useState} from "react"
import LostConnection from './components/emptystate/LostConnection';


function App() {

    const [online, setOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setOnline(true);
        const handleOffline = () => setOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
        };
    }, []);

    if (!online) {
        return <LostConnection title='Lost Your Connection' />;
      }

    return (
        <Provider store={store}>
            <BrowserRouter>
                <SetupRoutes/>
            </BrowserRouter>
        </Provider>
    )
}

export default App
