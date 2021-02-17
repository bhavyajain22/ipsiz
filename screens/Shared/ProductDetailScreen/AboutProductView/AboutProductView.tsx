import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import H2Typo from '../../../../components/micro-components/Typography/H2Typo/H2Typo';
import {styles} from './AboutProductView.styles';

const AboutProductView: React.FC<{
  handlePress: (focusedTab: 0 | 1 | 2 | 3 | 4) => void;
}> = ({handlePress}) => {
  return (
    <>
      <TouchableOpacity
        onPress={handlePress.bind(this, 0)}
        style={styles.singleItem}>
        <H2Typo text="Ürün Açıklaması" textStyle={styles.textStyle} />
        <FontAwesome5 name="chevron-right" color="#606060" size={18} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlePress.bind(this, 1)}
        style={styles.singleItem}>
        <H2Typo text="Ürün Özellikleri" textStyle={styles.textStyle} />
        <FontAwesome5 name="chevron-right" color="#606060" size={18} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlePress.bind(this, 2)}
        style={styles.singleItem}>
        <H2Typo text="Soru ve Cevaplar" textStyle={styles.textStyle} />
        <FontAwesome5 name="chevron-right" color="#606060" size={18} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlePress.bind(this, 3)}
        style={styles.singleItem}>
        <H2Typo text="Taksit Seçenekleri" textStyle={styles.textStyle} />
        <FontAwesome5 name="chevron-right" color="#606060" size={18} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlePress.bind(this, 4)}
        style={styles.singleItem}>
        <H2Typo text="İade Koşulları" textStyle={styles.textStyle} />
        <FontAwesome5 name="chevron-right" color="#606060" size={18} />
      </TouchableOpacity>
    </>
  );
};

export default AboutProductView;
