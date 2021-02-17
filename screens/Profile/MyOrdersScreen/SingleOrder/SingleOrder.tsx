import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {styles} from './SingleOrder.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import {COLORS} from '../../../../assets/colors';

const SingleOrder: React.FC<{onDetailsClicked: (orderId: string) => void}> = ({
  onDetailsClicked,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <View>
          <Text style={styles.dateText}>20 Ağustos 2020</Text>
          <Text style={styles.totalText}>
            Toplam: <Text style={styles.totalPriceText}>48.90</Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => onDetailsClicked('orderId')}
          style={styles.detailsTouchable}>
          <FontAwesome5
            name="chevron-right"
            color={COLORS.mainGreen}
            size={20}
            light
          />
          <Text style={styles.detailsText}>Detaylar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.statusText}>Teslim Edildi</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.productsScroll}>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <View key={index}>
              <Image
                source={{
                  uri:
                    'https://www.ipsizcambaz.com/ucdn/images/1fwznv2nz6rkke874ylo-3wsn2tjf2ck0ke874ylp-list.jpg',
                }}
                style={styles.productImage}
              />
              <View style={styles.productDivider} />
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default SingleOrder;
