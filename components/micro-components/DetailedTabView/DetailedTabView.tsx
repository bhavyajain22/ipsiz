import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import {ICategoryItem} from '../../../types/ICategory.type';
import {styles} from './DetailedTabView.styles';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
import BottomDivider from '../Divider/BottomDivider/BottomDivider';
import CustomButton from '../Controls/CustomButton/CustomButton';
import {useDispatch} from 'react-redux';
import {changeCategoryAction} from '../../../store/actions/filtering.actions';
import {COLORS} from '../../../assets/colors';
import SingleCategoryTextItem from './SingleCategoryTextItem/SingleCategoryTextItem';

const DetailedTabView: React.FC<{
  tabItems: ICategoryItem[];
  selectedItem: ICategoryItem;
}> = ({tabItems, selectedItem}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(
    tabItems.findIndex((item) => item.id === selectedItem.id),
  );
  const routesOld: (ICategoryItem & {key: string})[] = tabItems.map((item) => ({
    ...item,
    key: item.id,
  }));

  const renderRouteComps = (routes: (ICategoryItem & {key: string})[]) => {
    const obj: any = {};
    routes.forEach(
      (item) =>
        (obj[item.key] = () => (
          <ScrollView>
            {item.children &&
              item.children.map((cat) => (
                <View key={cat.id} style={{paddingLeft: 20, paddingTop: 10}}>
                  <SingleCategoryTextItem
                    key={cat.id}
                    item={cat}
                    parent={item.children}
                  />
                </View>
              ))}

            <CustomButton
              onPress={() => {
                dispatch(changeCategoryAction(item));
                navigation.navigate('search_stack');
              }}
              containerStyle={styles.bottomButton}
              text={`${item.text} Ara`}
              color={COLORS.mainGreen}
              textColor={COLORS.mainGreen}
              // eslint-disable-next-line react-native/no-inline-styles
              textStyle={{fontSize: 15}}
              outlined
            />

            <BottomDivider />
          </ScrollView>
        )),
    );
    return obj;
  };

  return (
    <TabView
      lazy={true}
      removeClippedSubviews={Platform.OS === 'android'}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          scrollEnabled
          pressColor="#ababab"
          pressOpacity={0.6}
          activeColor="#69BC44"
          inactiveColor="#000000"
          indicatorStyle={styles.indicatorStyle}
          renderLabel={({route, focused, color}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {route.imageUrl && (
                <Image
                  source={{uri: route.imageUrl}}
                  style={{
                    height: 50,
                    width: 50,
                    resizeMode: 'contain',
                    borderRadius: 100,
                    marginBottom: 5,
                  }}
                />
              )}
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  color,
                  fontFamily: focused ? 'Quicksand-Light' : 'Quicksand-Light',
                  textAlign: 'center',
                  fontSize: 12,
                }}>
                {route.text}
              </Text>
            </View>
          )}
          style={styles.tabBarStyle}
        />
      )}
      swipeEnabled={false}
      navigationState={{index, routes: routesOld}}
      renderScene={SceneMap(renderRouteComps(routesOld))}
      onIndexChange={setIndex}
      initialLayout={{width: Dimensions.get('window').width}}
    />
  );
};

export default DetailedTabView;
