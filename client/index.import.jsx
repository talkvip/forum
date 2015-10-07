import {createStore} from '../lib/redux';
import {Provider} from '../lib/reactredux';
import App from './containers/App';
import todoApp from './reducers';

let store = createStore(todoApp);


let containerApp = (
  <Provider store={store}>
    {() => <App />}
  </Provider>
);

export const ContainerApp = containerApp;



