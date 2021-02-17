import React from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './SortingModal.styles';
import Modal, {ModalProps} from 'react-native-modal';
import CustomCheckbox from '../../../../components/micro-components/Controls/CustomCheckbox/CustomCheckbox';
import H3Typo from '../../../../components/micro-components/Typography/H3Typo/H3Typo';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../store/reducers';
import {changeSortingAction} from '../../../../store/actions/filtering.actions';

const SortingModal: React.FC<
  Partial<ModalProps> & {
    sortingOptions: {
      value: '0' | '1' | '2' | '3' | '4' | '5' | '6';
      title: string;
    }[];
  }
> = ({sortingOptions, ...props}) => {
  const dispatch = useDispatch();
  const selectedSorting = useSelector(
    (state: RootState) => state.FilteringReducer.filteringStatus.sorting,
  );

  return (
    <Modal style={styles.modal} {...props}>
      <View style={styles.container}>
        <View
          style={[
            globalStyles.flexRow,
            globalStyles.justifyContentSpaceBetween,
          ]}>
          <H3Typo text="Sıralama" textStyle={globalStyles.paddingTen} />
          <TouchableOpacity>
            <H3Typo text="Temizle" textStyle={styles.clearText} />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={globalStyles.paddingTen}>
          {sortingOptions.map((item) => (
            <View key={item.title} style={styles.optionContainer}>
              <CustomCheckbox
                value={selectedSorting === item.value}
                text={item.title}
                onValueChange={(toAdd) =>
                  dispatch(changeSortingAction(item.value, toAdd))
                }
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default SortingModal;
