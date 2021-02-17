import React from 'react';
import {View, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesome5} from '@expo/vector-icons';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import H3Typo from '../../../../components/micro-components/Typography/H3Typo/H3Typo';
import H4Typo from '../../../../components/micro-components/Typography/H4Typo/H4Typo';
import {styles} from './SingleAddressItem.styles';

const SingleAddressItem: React.FC<{containerStyle: ViewStyle}> = ({
  containerStyle,
}) => {
  return (
    <View style={{...styles.mainContainer, ...containerStyle}}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftContainer}>
          <FontAwesome5
            name="map-pin"
            size={35}
            color={COLORS.mainGreen}
            light
          />
          <H3Typo text="Ev Adresim" textStyle={styles.headerTextContainer} />
        </View>
        <View style={globalStyles.flexRow}>
          <TouchableOpacity>
            <FontAwesome5
              name="trash-alt"
              light
              size={20}
              color={COLORS.mainDanger}
            />
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.marginLeftTen}>
            <FontAwesome5
              name="edit"
              light
              size={20}
              color={COLORS.midGray}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={globalStyles.marginTopTen}>
        <H4Typo text={'Berk Elmas'} textStyle={styles.nameText} />
        <H4Typo text={'+905073978264'} textStyle={styles.phoneText} />
        <H4Typo
          text={'Örnek Mahallesi, Örnek Caddesi A Apartmanı Kat 11 Daire 24'}
          textStyle={styles.addressText}
        />
      </View>
    </View>
  );
};

export default SingleAddressItem;
