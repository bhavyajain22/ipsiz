import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {styles} from './CustomModal.styles';
import Modal, {ModalProps} from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import ProductNameTypo from '../../Typography/ProductNameTypo/ProductNameTypo';

const CustomModal: React.FC<
  Partial<ModalProps> & {onClose: () => void; headerTitle?: string}
> = (props) => {
  const insets = useSafeAreaInsets();

  return (
    <Modal style={styles.modal} isVisible={props.isVisible} {...props}>
      <View style={styles.mainContainer}>
        <View
          style={{
            marginTop: insets.top,
            marginLeft: insets.left,
            marginRight: insets.right,
            marginBottom: insets.bottom,
          }}>
          {props.headerTitle && (
            <View style={styles.headerWrapper}>
              <View style={styles.firstRow}>
                <TouchableOpacity
                  hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}
                  onPress={() => props.onClose()}
                  style={styles.backTouchableStyle}>
                  <FontAwesome5
                    name="chevron-left"
                    solid
                    size={25}
                    color="#484848"
                  />
                </TouchableOpacity>
                <ProductNameTypo
                  text={props.headerTitle}
                  textStyle={styles.titleText}
                />
              </View>
            </View>
          )}
          <View style={styles.contentContainer}>{props.children}</View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
