// App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import Login from './components/Login';
import { store } from './redux/store';

const App: React.FC = () => (
  <Provider store={store}>
    <Login />
  </Provider>
);

export default App;
