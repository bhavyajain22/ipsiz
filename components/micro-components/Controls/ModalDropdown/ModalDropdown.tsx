import React, {memo, useEffect, useRef, useState} from 'react';
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './ModalDropdown.styles';
import Modal, {ModalProps} from 'react-native-modal';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import {FontAwesome} from '@expo/vector-icons';

const ModalDropdown: React.FC<{
  modalProps?: ModalProps;
  options: {title: string; value: string | number | Date | null}[];
  selectedVal: string | number | null;
  onValueChange: (toAdd: boolean, value: string | number | null) => void;
  placeholderText: string;
  containerStyle?: ViewStyle;
}> = ({
  modalProps,
  options,
  selectedVal,
  onValueChange,
  placeholderText,
  containerStyle,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const rotateUp = () => {
    Animated.spring(rotateAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const rotateDown = () => {
    Animated.spring(rotateAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (modalOpen) {
      rotateUp();
    } else {
      rotateDown();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen]);

  return (
    <>
      <TouchableOpacity
        style={{...styles.touchableContainer, ...containerStyle}}
        onPress={() => setModalOpen(true)}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            color: selectedVal ? '#484848' : '#ababab',
            ...styles.textStyle,
          }}>
          {selectedVal
            ? options.find((i) => i.value === selectedVal)?.title
            : placeholderText}
        </Text>
        <Animated.View
          style={{
            transform: [
              {
                rotateZ: rotateAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '-180deg'],
                }),
              },
            ],
          }}>
          <FontAwesome name="chevron-down" size={20} color="#ababab" />
        </Animated.View>
      </TouchableOpacity>
      <Modal
        style={styles.modal}
        {...modalProps}
        isVisible={modalOpen}
        onBackButtonPress={() => setModalOpen(false)}
        onBackdropPress={() => setModalOpen(false)}
        hideModalContentWhileAnimating={true}
        useNativeDriver={true}>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={globalStyles.paddingTen}>
            {options.map((item) => (
              <View key={item.title} style={styles.optionContainer}>
                <CustomCheckbox
                  value={selectedVal === item.value}
                  text={item.title}
                  onValueChange={(val) => onValueChange(val, item.value)}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

export default memo(ModalDropdown);
