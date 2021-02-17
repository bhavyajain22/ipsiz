import React from 'react';
import {View} from 'react-native';
import {COLORS} from '../../../../assets/colors';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import {styles} from './PazarOrderButtonGroup.styles';

const PazarOrderButtonGroup: React.FC<{
  buttonType: 'message' | 'order';
  handleBuyImmediatelyClicked?: () => any;
  handleAddToCartClicked?: () => any;
}> = ({handleAddToCartClicked, handleBuyImmediatelyClicked, buttonType}) => {
  return (
    <View style={styles.container}>
      {buttonType === 'order' ? (
        <>
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
            color={COLORS.mainPurple}
          />
        </>
      ) : (
        <CustomButton
          icon={{
            iconName: 'envelope',
            iconColor: 'white',
            iconType: 'light',
            iconSize: 20,
          }}
          containerStyle={styles.buttonContainer}
          text="Mesaj Gönder"
          textColor="white"
          textStyle={styles.buttonText}
          color={COLORS.mainPurple}
        />
      )}
    </View>
  );
};

export default PazarOrderButtonGroup;
