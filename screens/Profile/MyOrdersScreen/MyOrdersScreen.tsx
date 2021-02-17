import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, ScrollView} from 'react-native';
import BottomDivider from '../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import {ProfileStackParamList} from '../../../types/navigation-types/stack-types/profile-stack.type';
import {RootStackParamList} from '../../../types/navigation-types/stack-types/root-stack.type';
import {MainTabParamList} from '../../../types/navigation-types/tab-types/main-tab.type';
import {styles} from './MyOrdersScreen.styles';
import SingleOrder from './SingleOrder/SingleOrder';

type IMyOrdersNav = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'tab_stack'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<MainTabParamList, 'profile_stack'>,
    StackNavigationProp<ProfileStackParamList, 'my_orders_screen'>
  >
>;

const MyOrdersScreen = () => {
  const navigation = useNavigation<IMyOrdersNav>();

  const handleDetailsClicked = (item: string) => {
    navigation.navigate('order_detail_screen', {orderId: item});
  };

  return (
    <ScrollView style={styles.mainContainer}>
      {Array(10)
        .fill(null)
        .map((item, index) => (
          <>
            <SingleOrder key={index} onDetailsClicked={handleDetailsClicked} />
            <View style={styles.orderDivider} />
          </>
        ))}
      <BottomDivider />
    </ScrollView>
  );
};

export default MyOrdersScreen;
