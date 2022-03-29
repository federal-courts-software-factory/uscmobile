import { Platform, StyleSheet, ActivityIndicator, ScrollView   } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { WebView, } from 'react-native-webview';
import * as React from 'react';
import Constants from 'expo-constants';
const {title1} = require('../libs/usc');
import { SafeAreaView } from 'react-native-safe-area-context';
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  function LoadingIndicatorView() {
    return <ActivityIndicator color='#009b88' size='large' />
  }

  return (
    <View style={styles.main}>
     { Platform.OS !== 'web' ?  <WebView 
      style={styles.container}
      originWhitelist={['*']}
      renderLoading={LoadingIndicatorView}
      textZoom={100}
      source={{ uri: 'https://www.govinfo.gov/content/pkg/USCODE-2020-title1/html/USCODE-2020-title1.htm' }}
    />: <ScrollView  style={styles.webView}>{title1()}</ScrollView > }
  
 
    </View>
  );
}



const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  webView: {
    flex: 1, 
    marginLeft: 50
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    // this is a hack and somebody should come uup with a better solution.
    marginLeft: Constants.statusBarHeight,
    justifyContent: 'center',
  }
});
