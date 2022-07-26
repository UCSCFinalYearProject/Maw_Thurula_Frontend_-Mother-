import React from 'react';
import type {Node} from 'react';
import {NativeBaseProvider, Text, Box, extendTheme} from 'native-base';

import {MauthurulaTheme} from './src/theme/base/index';

const theme = extendTheme(MauthurulaTheme);

const App: () => Node = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Box flex={1} bg="#ff4433" alignItem="center" justifyConetent="center">
        <Text> Hansana Rrnawera is</Text>
      </Box>
      <Box flex={2} bg="#1732" alignItem="center" justifyConetent="center">
        <Text> Hansana Rrnawera is</Text>
      </Box>
      <Box flex={3} bg="#ffff33" alignItem="center" justifyConetent="center">
        <Text> Hansana Rrnawera is</Text>
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
