import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppImages } from '../../../general/constants/AppResource';
import { ScreenNames } from '../../../general/constants/ScreenNames';
import GlobalButton from '../../components/GlobalButton/index';
import styles from './styles';
Success.propTypes = {
  id: PropTypes.number,
};
Success.defaultProps = {};
let menuIndex = -1;
const DividerView = () => <View style={styles.divider}></View>;
export default function Success(props) {
  const {isVisible, onModalHidden, onMenuClick} = props;
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackdropPress={() => {
        if (onModalHidden) onModalHidden();
      }}
      onModalHide={() => {
        console.log('On modal hide');
        if (menuIndex != -1 && onMenuClick) {
          onMenuClick(menuIndex);
        }
        menuIndex = -1;
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
      <View style={[styles.successContainer, {bottom: insets.bottom}]}>
        <Image source={AppImages.bags} />
        <View style={styles.successTitle}>
          <Text style={styles.title}>Success</Text>
        </View>
        <View style={styles.indicator}>
          <Text style={styles.text}>
            Your order will be delivered soon. Thank you for choosing our app!
          </Text>
        </View>
        <GlobalButton
          actionText="CONTINUE SHOPPING"
          marginTop={163}
          action={() => {
            onModalHidden();
            navigation.navigate(ScreenNames.shopTab);
          }}
        />
      </View>
    </ReactNativeModal>
  );
}
