import React from 'react';
import type {Node} from 'react';
import {
  NativeBaseProvider,
  v3CompatibleTheme,
  Text,
  Box,
  extendTheme,
  ScrollView,
  StatusBar,
} from 'native-base';

import {MauthurulaTheme} from './src/theme/base/index';
import ArticleCard from './src/components/ArticleCard';
import Icon from 'react-native-vector-icons/Ionicons';

const theme = extendTheme(v3CompatibleTheme, MauthurulaTheme);

const App: () => Node = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <ScrollView>
        <Box
          bg="#00ff33"
          alignItems="center"
          justifyContent="space-between"
          padding="5px"
          flexDirection="row">
          <Text fontSize="xl" alignItems="center" textAlign="center">
            මව් තුරුල{' '}
          </Text>
          <Icon name="md-menu" size={30} color="#900" />
        </Box>
        <Box
          bg="#dddddd"
          alignItems="center"
          justifyContent="space-evenly"
          safeArea>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default App;
