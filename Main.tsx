import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {AppStyles} from './App.styles';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './navigation/NavigationComponents/RootStack';
import {getAllCategory} from './services/category.service';
import {
  startCategoriesLoading,
  successCategoriesLoading,
} from './store/actions/category.actions';
import {rebuildRecentSearchesAction} from './store/actions/recent-searches.actions';
import AsyncStorage from '@react-native-community/async-storage';
import {IUser} from './types/IUser.type';
import {setUserAction} from './store/actions/auth.actions';
import {continueAsGuestService} from './services/auth.service';
import SplashScreen from 'react-native-splash-screen';

declare const global: {HermesInternal: null | {}};

const Main: React.FC<{}> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleLogin = async () => {
      const token = await AsyncStorage.getItem('token');
      const user = await AsyncStorage.getItem('user');
      if (token && user) {
        const parsedUser = JSON.parse(user);
        dispatch(setUserAction(parsedUser as IUser));
      } else {
        const {
          data: {user: guestUser, JWT},
        } = await continueAsGuestService();
        dispatch(setUserAction(guestUser));
        AsyncStorage.setItem('token', JWT);
        AsyncStorage.setItem('user', JSON.stringify(guestUser));
      }
    };
    dispatch(startCategoriesLoading());
    getAllCategory().then(({data: result}) => {
      const {data} = result;
      dispatch(successCategoriesLoading(data));
    });
    dispatch(rebuildRecentSearchesAction());

    handleLogin();
    setTimeout(() => {
      //SplashScreen.hide();
    }, 1000);
  }, [dispatch]);

  return (
    <SafeAreaView style={AppStyles.safeAreaContainer}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Main;
