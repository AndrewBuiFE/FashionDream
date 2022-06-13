import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from '../../../data';
import { AppColors } from '../../../general/constants/AppStyle';
import GlobalButton from '../../components/GlobalButton/index';
import Modalheader from '../../components/ModalHeader/index';
import { setColorFocus } from '../../screens/ProductCardScreen/ProductSlice';
import ProfileCell from '../../screens/ProfileScreen/ProfileCell';
import ColorCell from '../FilterModal/components/ColorCell';
import styles from './styles';
SelectColorModal.propTypes = {
  isVisible: PropTypes.bool,
  onModalHidden: PropTypes.func,
  onAddColor: PropTypes.func,
};
SelectColorModal.defaultProps = {
  isVisible: true,
  onModalHidden: () => {},
  onAddColor: () => {},
};
export default function SelectColorModal(props) {
  const {isVisible, onModalHidden, onAddColor} = props;
  const insets = useSafeAreaInsets();
  const {colorIdFocus, isColorFocus} = useSelector(state => state.product);
  const dispatch = useDispatch();
  const renderItem = ({item}) => {
    return (
      <ColorCell
        item={item}
      />
    );
  };
  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackdropPress={() => {
        if (onModalHidden) onModalHidden();
      }}
      onModalHide={() => {
        console.log('On modal hide');
        if (isColorFocus && onAddColor) {
          let colorName = '';
          for (let color of COLORS) {
            if (color.id == colorIdFocus) {
              colorName = color.name;
              continue;
            }
          }
          onAddColor(colorName);
        }
        dispatch(setColorFocus(false));
      }}
      hasBackdrop={true}
      avoidKeyboard={true}
      onSwipeComplete={() => {
        if (onModalHidden) {
          onModalHidden();
        }
      }}
      swipeDirection="down"
      coverScreen={true}
      style={{margin: 0}}>
      <View style={[styles.sizeContainer, {bottom: insets.bottom}]}>
        <Modalheader />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Select color</Text>
        </View>
        <FlatList
          data={COLORS}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginHorizontal: 26,
            height: 96,
            marginTop: 22,
            justifyContent: 'space-between',
          }}
          numColumns={5}
        />
        <View style={[styles.divider, {marginTop: 0}]}></View>
        <ProfileCell
          title="Color info"
          backgroundColor={AppColors.modalColor}
          suggestion=""
          height={48}
        />
        <View style={styles.divider}></View>
        <GlobalButton
          actionText="ADD COLOR"
          marginTop={28}
          action={() => {
            onModalHidden();
          }}
        />
      </View>
    </ReactNativeModal>
  );
}
