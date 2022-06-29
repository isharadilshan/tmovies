import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import GlobalExceptionHandler from './components/organism/GlobalExceptionHandler';
import NoNetworkFound from './components/organism/NoNetworkFound';
import Routes from './routes';

const App: () => Node = () => {
  return (
    <PaperProvider>
      <GlobalExceptionHandler />
      <NoNetworkFound />
      <Routes />
    </PaperProvider>
  );
};

export default App;
