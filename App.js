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
            <StatusBar></StatusBar>
      <ScrollView >
      <Text fontSize="xl" alignItems="center" textAlign="center">මව් තුරුල </Text>
        <Box bg="#dddddd" alignItems="center" justifyContent="space-evenly" safeArea>
        <Icon name="md-menu" size={30} color="#900" />

          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </Box>
        </ScrollView>
    </NativeBaseProvider>
  );
};


export default App;
