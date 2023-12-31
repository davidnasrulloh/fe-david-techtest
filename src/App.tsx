import { Provider } from 'react-redux'
import './App.css'
import SetupRoutes from './routers'
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <SetupRoutes/>
            </BrowserRouter>
        </Provider>
    )
}

export default App
