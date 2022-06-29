import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import GlobalExceptionHandler from './components/organism/GlobalExceptionHandler';
import Routes from './routes';

const App: () => Node = () => {
  return (
    <>
      <GlobalExceptionHandler />
      <Routes />
    </>
  );
};

export default App;
