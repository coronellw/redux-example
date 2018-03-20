import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

window.store = store

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
