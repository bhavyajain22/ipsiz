import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import React, {useLayoutEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import CustomModal from '../../../components/micro-components/Modal/CustomModal/CustomModal';
import {ProfileStackParamList} from '../../../types/navigation-types/stack-types/profile-stack.type';
import {RootStackParamList} from '../../../types/navigation-types/stack-types/root-stack.type';
import {MainTabParamList} from '../../../types/navigation-types/tab-types/main-tab.type';
import AddNewAddressContent from './AddNewAddressContent/AddNewAddressContent';
import EditAddressContent from './EditAddressContent/EditAddressContent';
import {styles} from './MyAddressesScreen.styles';
import SingleAddressItem from './SingleAddressItem/SingleAddressItem';

type IMyAddressesNav = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'tab_stack'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<MainTabParamList, 'profile_stack'>,
    StackNavigationProp<ProfileStackParamList, 'my_addresses_screen'>
  >
>;

const MyAddressesScreen: React.FC<{navigation: IMyAddressesNav}> = ({
  navigation,
}) => {
  const [addNewAddressModalOpen, setAddNewAddressModalOpen] = useState<boolean>(
    false,
  );
  const [editAddressModalOpen, setEditAddressModalOpen] = useState<boolean>(
    false,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      iconButtonFunction: () => {
        setAddNewAddressModalOpen(true);
      },
    } as Partial<StackNavigationOptions & {iconButtonFunction: () => any}>);
  }, [navigation]);

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <SingleAddressItem containerStyle={styles.singleAddress} />
        </ScrollView>
      </View>
      <CustomModal
        headerTitle="Yeni Adres Ekle"
        onClose={() => setAddNewAddressModalOpen(false)}
        onBackButtonPress={() => setAddNewAddressModalOpen(false)}
        isVisible={addNewAddressModalOpen}>
        <AddNewAddressContent addressType="Gonderim" />
      </CustomModal>
      <CustomModal
        headerTitle="Adres Düzenle"
        onClose={() => setEditAddressModalOpen(false)}
        onBackButtonPress={() => setEditAddressModalOpen(false)}
        isVisible={editAddressModalOpen}>
        <EditAddressContent />
      </CustomModal>
    </>
  );
};

export default MyAddressesScreen;
