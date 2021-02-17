import React from 'react';
import {View} from 'react-native';
import {COLORS} from '../../../../assets/colors';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import {styles} from './MessageOfferButtonGroup.styles';

const MessageOfferButtonGroup: React.FC<{
  handleBuyImmediatelyClicked: () => any;
  handleAddToCartClicked: () => any;
}> = ({handleAddToCartClicked, handleBuyImmediatelyClicked}) => {
  return (
    <View style={styles.container}>
      <CustomButton
        onPress={handleBuyImmediatelyClicked}
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
        color={COLORS.mainBlue}
      />
      <CustomButton
        onPress={handleAddToCartClicked}
        icon={{
          iconName: 'handshake',
          iconColor: 'white',
          iconType: 'light',
          iconSize: 20,
        }}
        containerStyle={styles.buttonContainer}
        text="Teklif Gönder"
        textColor="white"
        textStyle={styles.buttonText}
        color={COLORS.mainDark}
      />
    </View>
  );
};

export default MessageOfferButtonGroup;
