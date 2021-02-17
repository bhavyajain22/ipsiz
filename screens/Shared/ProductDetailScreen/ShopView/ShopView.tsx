import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import H3Typo from '../../../../components/micro-components/Typography/H3Typo/H3Typo';
import SmallTypo from '../../../../components/micro-components/Typography/SmallTypo/SmallTypo';
import {styles} from './ShopView.styles';

const ShopView: React.FC<{
  shopName: string;
  shopId: string;
  percentage: number;
  onAskButtonClick: () => void;
}> = ({shopName, percentage, onAskButtonClick, shopId}) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('store_stack', {
            screen: 'store_detail_screen',
            params: {
              shopName,
              id: shopId,
            },
          })
        }
        style={styles.textIconContainer}>
        <FontAwesome5
          name="shopping-bag"
          light
          size={25}
          color={COLORS.mainGreen}
        />
        <H3Typo textStyle={{...globalStyles.marginLeftTen}} text={shopName} />
        <FontAwesome5
          name="arrow-right"
          size={10}
          color={COLORS.mainDark}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{marginLeft: 5}}
        />
      </TouchableOpacity>

      <View style={styles.bottomContainer}>
        <SmallTypo text={`Mağaza Puanı ${percentage}%`} />
        <View style={styles.percentageContainer}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              ...styles.percentageBar,
              width: percentage > 0 ? `${percentage}%` : 0,
            }}
          />
          <View />
        </View>
      </View>
      {/* ASK QUESTION TO SHOP BUTTON */}
      <CustomButton
        onPress={onAskButtonClick}
        containerStyle={globalStyles.marginTopTwenty}
        text="Mağazaya Soru Sor"
        // eslint-disable-next-line react-native/no-inline-styles
        textStyle={{fontSize: 15}}
        color={COLORS.mainGreen}
        textColor="#ffffff"
      />
    </View>
  );
};

export default memo(ShopView);
