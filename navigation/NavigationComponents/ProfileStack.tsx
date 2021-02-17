import React from 'react';
import {createStackNavigator, StackHeaderProps} from '@react-navigation/stack';
import CustomHeaderSearch from '../CustomHeaderSearch/CustomHeaderSearch';

import ProfileScreen from '../../screens/Profile/ProfileScreen/ProfileScreen';
import NoLoginProfileScreen from '../../screens/Profile/NoLoginProfileScreen/NoLoginProfileScreen';
import CustomHeaderBrandBack from '../CustomHeaderBrandBack/CustomHeaderBrandBack';
import MyOrdersScreen from '../../screens/Profile/MyOrdersScreen/MyOrdersScreen';
import CustomHeaderTextBack from '../CustomHeaderTextBack/CustomHeaderTextBack';
import OrderDetailScreen from '../../screens/Profile/OrderDetailScreen/OrderDetailScreen';
import AboutUsScreen from '../../screens/Profile/AboutUsScreen/AboutUsScreen';
import SpecialForAcrobatsScreen from '../../screens/Profile/SpecialForAcrobatsScreen/SpecialForAcrobatsScreen';
import MyProfileScreen from '../../screens/Profile/MyProfileScreen/MyProfileScreen';
import MyAddressesScreen from '../../screens/Profile/MyAddressesScreen/MyAdressesScreen';
import MyInvoiceAddressesScreen from '../../screens/Profile/MyInvoiceAddressesScreen/MyInvoiceAddressesScreen';
import CustomHeaderRightIconBack from '../CustomHeaderRightIconBack/CustomHeaderRightIconBack';

const Stack = createStackNavigator();

const ProfileStack: React.FC<{}> = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="profile_screen"
        component={ProfileScreen}
        options={{
          headerTitle: 'Profil',
          header: (props: StackHeaderProps) => (
            <CustomHeaderBrandBack {...props} noShowBack />
          ),
        }}
      />
      <Stack.Screen
        name="my_profile_screen"
        component={MyProfileScreen}
        options={{
          title: 'Profilim',
          header: (props: StackHeaderProps) => (
            <CustomHeaderTextBack {...props} />
          ),
        }}
      />
      <Stack.Screen
        name="my_orders_screen"
        component={MyOrdersScreen}
        options={{
          title: 'Siparişlerim',
          header: (props: StackHeaderProps) => (
            <CustomHeaderTextBack {...props} />
          ),
        }}
      />
      <Stack.Screen
        name="my_addresses_screen"
        component={MyAddressesScreen}
        options={{
          title: 'Gönderim Adreslerim',
          header: (props: StackHeaderProps) => (
            <CustomHeaderRightIconBack {...props} rightIconName="plus" />
          ),
        }}
      />
      <Stack.Screen
        name="my_invoice_addresses_screen"
        component={MyInvoiceAddressesScreen}
        options={{
          title: 'Fatura Adreslerim',
          header: (props: StackHeaderProps) => (
            <CustomHeaderRightIconBack {...props} rightIconName="plus" />
          ),
        }}
      />
      <Stack.Screen
        name="order_detail_screen"
        component={OrderDetailScreen}
        options={{
          title: 'Sipariş Detayı',
          header: (props: StackHeaderProps) => (
            <CustomHeaderTextBack {...props} />
          ),
        }}
      />
      <Stack.Screen
        name="about_us_screen"
        component={AboutUsScreen}
        options={{
          title: 'Hakkımızda',
          header: (props: StackHeaderProps) => (
            <CustomHeaderBrandBack {...props} />
          ),
        }}
      />
      <Stack.Screen
        name="special_for_acrobats_screen"
        component={SpecialForAcrobatsScreen}
        options={{
          title: 'Cambazlara Özel',
          header: (props: StackHeaderProps) => (
            <CustomHeaderBrandBack {...props} />
          ),
        }}
      />
      <Stack.Screen
        name="no_login_profile_screen"
        component={NoLoginProfileScreen}
        options={{
          headerTitle: 'Profil',
          header: (props: StackHeaderProps) => (
            <CustomHeaderSearch {...props} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
