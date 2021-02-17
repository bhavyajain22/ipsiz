import React from 'react';
import {Text, Dimensions, ViewStyle, ColorValue, TextStyle} from 'react-native';
import {styles} from './RegularTabView.styles';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

// *
// scenesObj should be an object with the same keys as the route object has and returns ReactNodes
// as the value parameter for each key.
// *
const RegularTabView: React.FC<{
  startingIndex: number;
  routes: {key: string; title: string}[];
  scenesObj: any;
  scrollEnabled?: boolean;
  containerStyle?: ViewStyle;
  tabActiveColor: ColorValue;
  tabInactiveColor: ColorValue;
  labelTextStyle?: TextStyle;
}> = ({
  startingIndex,
  routes,
  scenesObj,
  scrollEnabled,
  containerStyle,
  tabActiveColor,
  tabInactiveColor,
  labelTextStyle,
}) => {
  const [index, setIndex] = React.useState(0);

  // HACKY SOLUTION FOR THE LIB TO WORK IN RN MODAL.
  React.useEffect(() => {
    setTimeout(() => {
      setIndex(startingIndex);
    }, 300);
  }, [startingIndex]);

  return (
    <TabView
      style={containerStyle}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          scrollEnabled={scrollEnabled}
          activeColor={tabActiveColor as string}
          inactiveColor={tabInactiveColor as string}
          indicatorStyle={{backgroundColor: tabActiveColor}}
          renderLabel={({route, focused, color}) => (
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color,
                fontFamily: focused ? 'Quicksand-Light' : 'Quicksand-Light',
                textAlign: 'center',
                fontSize: 11,
                ...labelTextStyle,
              }}>
              {route.title}
            </Text>
          )}
          style={styles.tabBarStyle}
        />
      )}
      swipeEnabled={false}
      navigationState={{index, routes}}
      renderScene={SceneMap(scenesObj)}
      onIndexChange={setIndex}
      initialLayout={{width: Dimensions.get('window').width * 2}}
    />
  );
};

export default RegularTabView;
