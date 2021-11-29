import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {App} from './App';
import {theme} from './theme';

export const Main = () => (
  <PaperProvider theme={theme}>
    {typeof document !== 'undefined' && (
      <style type="text/css">{`@font-face {
  font-family: 'MaterialCommunityIcons';
  src: url(${
    require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf').default
  }) format('truetype');
}`}</style>
    )}

    <App />
  </PaperProvider>
);
