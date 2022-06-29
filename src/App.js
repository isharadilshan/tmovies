import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import GlobalExceptionHandler from './components/organism/GlobalExceptionHandler';
import Routes from './routes';

const App: () => Node = () => {
  return (
    <PaperProvider>
      <GlobalExceptionHandler />
      <Routes />
    </PaperProvider>
  );
};

export default App;
