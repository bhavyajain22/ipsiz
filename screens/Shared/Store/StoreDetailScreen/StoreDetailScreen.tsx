import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {FontAwesome5} from '@expo/vector-icons';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import H3Typo from '../../../../components/micro-components/Typography/H3Typo/H3Typo';
import H4Typo from '../../../../components/micro-components/Typography/H4Typo/H4Typo';
import {RootStackParamList} from '../../../../types/navigation-types/stack-types/root-stack.type';
import {IStoreParamList} from '../../../../types/navigation-types/stack-types/store-stack.type';
import {styles} from './StoreDetailScreen.styles';

type IStoreDetailsNav = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'tab_stack'>,
  StackNavigationProp<IStoreParamList, 'store_detail_screen'>
>;

const StoreDetailScreen: React.FC<{
  navigation: IStoreDetailsNav;
  route:
    | RouteProp<RootStackParamList, 'store_stack'>
    | RouteProp<IStoreParamList, 'store_detail_screen'>;
}> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <Image
            source={{
              uri:
                'https://www.ipsizcambaz.com/cdn/assets/images/store/default-logo.png',
            }}
            style={styles.storeImage}
          />
          <View style={styles.topRightContainer}>
            <View style={styles.storeNameContainer}>
              <FontAwesome5
                name="shopping-bag"
                color={COLORS.mainGreen}
                size={20}
                light
              />
              <H4Typo text={'GRD KOZMETİK'} textStyle={styles.storeText} />
            </View>
            <View>
              <Text style={styles.storeScoreText}>Mağaza Puanı 46%</Text>
              <View style={styles.percentageContainer}>
                <View
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    ...styles.percentageBar,
                    width: '46%',
                  }}
                />
                <View />
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <CustomButton
                containerStyle={styles.singleButtonContainer}
                text={'Takip Et'}
                color={COLORS.mainDark}
                textColor="white"
                // eslint-disable-next-line react-native/no-inline-styles
                textStyle={{fontSize: 15}}
              />
              <CustomButton
                containerStyle={{
                  ...styles.singleButtonContainer,
                  ...globalStyles.marginLeftTen,
                }}
                text={'Soru Sor'}
                color={COLORS.mainGreen}
                textColor="white"
                // eslint-disable-next-line react-native/no-inline-styles
                textStyle={{fontSize: 15}}
              />
            </View>
          </View>
        </View>
        <View style={styles.secondCardContainer}>
          <View style={styles.secondCardHeaderContainer}>
            <H3Typo text="Genel Bilgiler" textStyle={styles.secondHeaderText} />
            <FontAwesome5
              name="stars"
              size={25}
              color={COLORS.mainGreen}
              light
            />
          </View>
          <View style={globalStyles.marginTopFive}>
            <View style={styles.featureContainer}>
              <Text style={styles.featureText}>Kayıt Tarihi</Text>
              <Text style={styles.featureRightText}>20.07.2020</Text>
            </View>
          </View>
          <View style={globalStyles.marginTopFive}>
            <View style={styles.featureContainer}>
              <Text style={styles.featureText}>Kategori</Text>
              <Text style={styles.featureRightText}>
                Kozmetik ve Kişisel Bakım
              </Text>
            </View>
          </View>
          <View style={globalStyles.marginTopFive}>
            <View style={styles.featureContainer}>
              <Text style={styles.featureText}>Ticari Ünvan</Text>
              <Text style={styles.featureRightText}>Barış Yener</Text>
            </View>
          </View>
          <View style={globalStyles.marginTopFive}>
            <View style={styles.featureContainer}>
              <Text style={styles.featureText}>Şehir</Text>
              <Text style={styles.featureRightText}>Ankara</Text>
            </View>
          </View>
          <View style={globalStyles.marginTopFive}>
            <View style={styles.featureContainer}>
              <Text style={styles.featureText}>Vergi Numarası</Text>
              <Text style={styles.featureRightText}>1781433618</Text>
            </View>
          </View>
          <CustomButton
            onPress={() =>
              navigation.navigate('store_products_screen', {
                shopName: route.params?.shopName as string,
                shopId: route.params?.shopId as string,
              })
            }
            color={COLORS.mainGreen}
            textColor="white"
            text="Satıcının Tüm Ürünleri"
            containerStyle={globalStyles.marginTopTwenty}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default StoreDetailScreen;
