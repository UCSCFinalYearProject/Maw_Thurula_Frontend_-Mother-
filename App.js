import React from 'react';
import type {Node} from 'react';
import {
  NativeBaseProvider,
  v3CompatibleTheme,
  Text,
  Box,
  extendTheme,
  ScrollView,
  View,
} from 'native-base';

import {MauthurulaTheme} from './src/theme/base/index';
import ArticleCard from './src/components/ArticleCard';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert, Platform,
  StatusBar, Dimensions,
} from "react-native";
import SplashScreen from './src/pages/SplashScreen';

const theme = extendTheme(v3CompatibleTheme, MauthurulaTheme);

const App: () => Node = () => {
  console.log(Dimensions.get("window"));
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView style={style.container}>
        <TouchableHighlight
          onPress={() => {
            console.log('Clicked');
          }}>
          <Image
            fadeDuration={10000}
            source={{
              uri: 'https://picsum.photos/200/300',
              width: 200,
              height: 300,
            }}
          />
        </TouchableHighlight>
        <Button
          onPress={() => {
            Alert.prompt('Hansana Ranaweera', 'My name', text => {
              console.log(text);
            });
          }}
          title={' Click'}
        />
        <SplashScreen/>
        <Text numberOfLines={1}>
          Hello ReactHello ReactHello ReactHello ReactHello ReactHello
          ReactHello ReactHello ReactHello ReactHello ReactHello ReactHello
          React
        </Text>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
export default App;
