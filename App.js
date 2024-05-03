import { Provider } from 'react-redux';

import store from './src/redux/store';
import MainNavigate from './src/navigation/MainNavigate';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigate />
    </Provider>
  );
}