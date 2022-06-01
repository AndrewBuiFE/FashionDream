import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import GlobalButton from '../../components/GlobalButton/index';
import Modalheader from '../../components/ModalHeader/index';
import styles from './styles';
PasswordModal.propTypes = {};
PasswordModal.defaultProps = {};
var menuIndex = -1;
var isCheck = true;
export default function PasswordModal(props) {
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
      <View style={[styles.passwordContainer, {bottom: insets.bottom}]}>
        <Modalheader />
        <View style={styles.titleSection}>
          <Text style={styles.titleText}>Password change</Text>
        </View>
        <View style={[styles.inputContainer, {marginTop: 18}]}>
          <TextInput
            placeholder="Old Password"
            placeholderTextColor={'#ABB4BD'}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity style = {styles.forgotPass}>
          <Text>Forgot password?</Text>
        </TouchableOpacity>
        <View style={[styles.inputContainer, {marginTop: 18}]}>
          <TextInput
            placeholder="New Password"
            placeholderTextColor={'#ABB4BD'}
            style={styles.textInput}
          />
        </View>
        <View style={[styles.inputContainer, {marginTop: 24}]}>
          <TextInput
            placeholder="Repeat New Password"
            placeholderTextColor={'#ABB4BD'}
            style={styles.textInput}
          />
        </View>
        <GlobalButton actionText="SAVE PASSWORD" marginTop={32} />
      </View>
    </ReactNativeModal>
  );
}
