import React from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import CustomCheckbox from '../../../../components/micro-components/Controls/CustomCheckbox/CustomCheckbox';
import DescriptionTypo from '../../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import H3Typo from '../../../../components/micro-components/Typography/H3Typo/H3Typo';
import {styles} from './HalComplaintContent.styles';

const HalComplaintContent: React.FC<{onClose: () => void}> = ({onClose}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.mainBack}>
          <Image
            source={{
              uri: 'https://www.ipsizcambaz.com/cdn/assets/images/logo.png',
            }}
            style={styles.logoStyle}
          />
          <TouchableOpacity onPress={onClose} style={styles.closeIconStyle}>
            <FontAwesome5 name="times" light size={30} color="#767676" />
          </TouchableOpacity>
        </View>

        <View style={styles.cardStyle}>
          <H3Typo
            text="Ürünü Şikayet Et"
            textStyle={{color: COLORS.mainDanger}}
          />
          <DescriptionTypo text="Ürün hakkındaki şikayetlerinizi buradan bildirebilirsiniz." />
          <CustomCheckbox
            boxType="square"
            value={true}
            onValueChange={(val: any) => val}
            text="Ürünün Görselinde Hata Var."
            checkboxColor={COLORS.mainDanger}
            containerStyle={globalStyles.marginTopTwenty}
          />
          <CustomCheckbox
            boxType="square"
            value={false}
            onValueChange={(val: any) => val}
            text="Ürünün Görselinde Hata Var."
            checkboxColor={COLORS.mainDanger}
            containerStyle={globalStyles.marginTopTwenty}
          />
          <CustomCheckbox
            boxType="square"
            value={false}
            onValueChange={(val: any) => val}
            text="Ürünün Görselinde Hata Var."
            checkboxColor={COLORS.mainDanger}
            containerStyle={globalStyles.marginTopTwenty}
          />
          <CustomButton
            text="Gönder"
            color={COLORS.mainDanger}
            textColor="#ffffff"
            containerStyle={globalStyles.marginTopTwenty}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HalComplaintContent;
