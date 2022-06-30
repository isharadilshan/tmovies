import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import GlobalExceptionHandler from './components/organism/GlobalExceptionHandler';
import NoNetworkFound from './components/organism/NoNetworkFound';
import redux from './redux/store';
import Routes from './routes';

const App: () => Node = () => {
  return (
    <Provider store={redux.store}>
      <PaperProvider>
        <GlobalExceptionHandler />
        <NoNetworkFound />
        <Routes />
      </PaperProvider>
    </Provider>
  );
};

export default App;
