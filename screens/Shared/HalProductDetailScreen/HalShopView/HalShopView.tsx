import React, {memo} from 'react';
import {View} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import H3Typo from '../../../../components/micro-components/Typography/H3Typo/H3Typo';
import SmallTypo from '../../../../components/micro-components/Typography/SmallTypo/SmallTypo';
import {styles} from './HalShopView.styles';

const HalShopView: React.FC<{
  storeName: string;
  percentage: number;
  onAskButtonClick: () => void;
}> = ({storeName, percentage, onAskButtonClick}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <FontAwesome5
          name="shopping-bag"
          light
          size={25}
          color={COLORS.mainDark}
        />
        <H3Typo textStyle={{...globalStyles.marginLeftTen}} text={storeName} />
        <FontAwesome5
          name="arrow-right"
          size={10}
          color={COLORS.mainDark}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{marginLeft: 5}}
        />
      </View>

      <View style={styles.percentageContainer}>
        <SmallTypo text={`Mağaza Puanı ${percentage}%`} />
        <View style={styles.percentageBackground}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              ...styles.percentageFill,
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
        color={COLORS.mainBlue}
        // eslint-disable-next-line react-native/no-inline-styles
        textStyle={{fontSize: 15}}
        textColor="#ffffff"
      />
    </View>
  );
};

export default memo(HalShopView);
