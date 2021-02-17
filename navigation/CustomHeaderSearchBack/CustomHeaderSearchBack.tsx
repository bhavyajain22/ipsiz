import React from 'react';
import {StackHeaderProps} from '@react-navigation/stack';
import { View, Image, TouchableOpacity, Text, Alert } from "react-native";
import {styles} from './CustomHeaderSearchBack.styles';
import { FontAwesome5 } from '@expo/vector-icons';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducers';
import { CommonActions } from "@react-navigation/native";

const CustomHeaderSearchBack: React.FC<
  StackHeaderProps & {noShowBack?: boolean}
> = (props) => {
  const filteringStatus = useSelector(
    (state: RootState) => state.FilteringReducer.filteringStatus,
  );
  const totalPageCount = useSelector(
    (state: RootState) => state.FilteringReducer.totalPageCount,
  );

  const textRenderer = () => {
    if (filteringStatus.category) {
      return `${filteringStatus.category.text} | ${
        (totalPageCount as number) * 12
      }`;
    } else if (filteringStatus.globalSearch) {
      return `${filteringStatus.globalSearch} | ${
        (totalPageCount as number) * 12
      }`;
    }
    return 'Ürün, Marka veya Kategoride Ara...';
  };

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.firstRow}>
        {!props.noShowBack && (
          <TouchableOpacity
            hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}
            onPress={() =>
              props.navigation.canGoBack()
                ? props.navigation.goBack()
                : props.navigation.navigate('tab_stack')
            }
            style={styles.backTouchableStyle}>
            <FontAwesome5 name="chevron-left" solid size={25} color="#484848" />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
          {
            props.navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "tab_stack" }],
              })
            );
          }
          }>
          <Image
            source={{
              uri: 'https://www.ipsizcambaz.com/cdn/assets/images/logo.png',
            }}
            style={styles.logoImg}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.secondRow}>
        <View style={styles.searchTouchableContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.searchContainer}
            onPress={() =>
              props.navigation.navigate('global_search_modal_screen')
            }>
            <FontAwesome5
              name="search"
              size={22}
              color="#BFBFBF"
              style={styles.searchIcon}
            />
            <Text style={styles.searchText}>{textRenderer()}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomHeaderSearchBack;
