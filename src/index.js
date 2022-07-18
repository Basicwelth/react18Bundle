import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import store from './store';
import App from "./components/App";
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <App tab="home" />
    // <Provider>
    //     <App tab="home" />
    // </Provider>
);

