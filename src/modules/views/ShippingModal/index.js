import React from 'react';
import { Text, TextInput, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import GlobalButton from '../../components/GlobalButton/index';
import Modalheader from '../../components/ModalHeader/index';
import InputSection from '../../screens/PaymentScreen/InputSection/index';
import styles from './styles';
ShippingModal.propTypes = {};
ShippingModal.defaultProps = {};
var menuIndex = -1;
var isCheck = true;
export default function ShippingModal(props) {
  const {isVisible, onModalHidden, onMenuClick} = props;
  const insets = useSafeAreaInsets();
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
      <View style={[styles.addCardContainer, {bottom: insets.bottom}]}>
        <Modalheader />
        <View style={styles.titleSection}>
          <Text style={styles.titleText}>Adding shipping addresses</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Full name"
            placeholderTextColor={'#ABB4BD'}
            style={styles.textInput}
          />
        </View>
        <InputSection title={'Address'} content={'3 Newbridge Court'} />
        <InputSection title={'City'} content={'Chino Hills'} />
        <InputSection title={'State/Province/Region'} content={'California'} />
        <InputSection title={'Zip code (Postal Code)'} content={'91709'} />
        <InputSection title={'Country'} content={'United States'} />
        <GlobalButton actionText="SAVE ADDRESS" marginTop={40} />
      </View>
    </ReactNativeModal>
  );
}
