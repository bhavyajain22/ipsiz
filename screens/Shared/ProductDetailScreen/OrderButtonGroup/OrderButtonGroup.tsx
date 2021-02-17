import React from 'react';
import {View} from 'react-native';
import {COLORS} from '../../../../assets/colors';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import {styles} from './OrderButtonGroup.styles';

const OrderButtonGroup: React.FC<{
  handleBuyImmediatelyClicked: () => any;
  handleAddToCartClicked: () => any;
}> = ({handleAddToCartClicked, handleBuyImmediatelyClicked}) => {
  return (
    <View style={styles.container}>
      <CustomButton
        onPress={handleBuyImmediatelyClicked}
        icon={{
          iconName: 'shopping-cart',
          iconColor: 'white',
          iconType: 'light',
          iconSize: 20,
        }}
        containerStyle={styles.buttonContainer}
        text="Hemen Al"
        textColor="white"
        textStyle={styles.buttonText}
        color={COLORS.mainBlue}
      />
      <CustomButton
        onPress={handleAddToCartClicked}
        icon={{
          iconName: 'shopping-basket',
          iconColor: 'white',
          iconType: 'light',
          iconSize: 20,
        }}
        containerStyle={styles.buttonContainer}
        text="Sepete Ekle"
        textColor="white"
        textStyle={styles.buttonText}
        color={COLORS.mainGreen}
      />
    </View>
  );
};

export default OrderButtonGroup;
