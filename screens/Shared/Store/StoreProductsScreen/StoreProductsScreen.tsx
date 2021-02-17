import React from 'react';
import {ScrollView, View} from 'react-native';
import SingleProductRegular from '../../../../components/shared/SingleProductRegular/SingleProductRegular';
import {styles} from './StoreProductsScreen.styles';

const StoreProductsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <SingleProductRegular imageStyle={styles.productImage} />
        <SingleProductRegular imageStyle={styles.productImage} />
        <SingleProductRegular imageStyle={styles.productImage} />
        <SingleProductRegular imageStyle={styles.productImage} />
        <SingleProductRegular imageStyle={styles.productImage} />
        <SingleProductRegular imageStyle={styles.productImage} />
        <SingleProductRegular imageStyle={styles.productImage} />
        <SingleProductRegular imageStyle={styles.productImage} />
        <SingleProductRegular imageStyle={styles.productImage} />
        <SingleProductRegular imageStyle={styles.productImage} />
        <SingleProductRegular imageStyle={styles.productImage} />
        <SingleProductRegular imageStyle={styles.productImage} />
      </ScrollView>
    </View>
  );
};

export default StoreProductsScreen;
