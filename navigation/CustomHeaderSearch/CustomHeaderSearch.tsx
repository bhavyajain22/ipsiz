import React from 'react';
import {View, Text, Image} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './CustomHeaderSearch.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BadgedIcon from '../../components/micro-components/BadgedIcon/BadgedIcon';
import {COLORS} from '../../assets/colors';

const CustomHeaderSearch: React.FC<StackHeaderProps> = (props) => {
  // const {options} = props.scene.descriptor;
  // const title =
  //   options.headerTitle !== undefined
  //     ? options.headerTitle
  //     : options.title !== undefined
  //     ? options.title
  //     : props.scene.route.name;

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.firstRow}>
        <View />
        <Image
          source={{
            uri: 'https://www.ipsizcambaz.com/cdn/assets/images/logo.png',
          }}
          style={styles.logoImg}
        />
        <View />
        <View style={styles.topIconsContainer}>
          <BadgedIcon
            name="bell"
            size={24}
            color="#767676"
            badgeCount={1}
            badgeBackgroundColor={COLORS.mainGreen}
            onPress={() => {
              // TODO: HANDLE ROUTE CHANGE MORE PROPERLY WITH NAVIGATIONACTIONS.
              props.navigation.navigate('profile_stack');
              setTimeout(() => {
                props.navigation.navigate('profile_stack', {
                  screen: 'my_orders_screen',
                });
              }, 400);
            }}
          />
        </View>
      </View>
      <View style={styles.secondRow}>
        <View style={styles.searchTouchableContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.searchContainer}
            onPress={() =>
              props.navigation.navigate('global_search_modal_screen')
            }>

            <Text style={styles.searchText}>
              Ürün, marka veya kategoride arayın...
            </Text>
            <View style={styles.searchRightBlock}>
              <Text style={styles.searchRightText}>Ara</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default CustomHeaderSearch;
