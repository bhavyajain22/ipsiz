import 'react-native-gesture-handler';
import React from 'react';
import Main from './Main';
import {Provider} from 'react-redux';
import store from './store/configureStore';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// @ts-ignore
import Toast from 'react-native-toast-message';

import {View} from 'react-native';
import { useFonts } from 'expo-font';

declare const global: {HermesInternal: null | {}};

const App: React.FC<{}> = () => {
  let [fontsLoaded] = useFonts({
    'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
    'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
    'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand-SemiBold': require('./assets/fonts/Quicksand-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <>
        <SafeAreaProvider>
          <Provider store={store}>
            <Main />
          </Provider>
        </SafeAreaProvider>
        <Toast ref={(ref: any) => Toast.setRef(ref)} />
      </>
    );
  }

};

export default App;
