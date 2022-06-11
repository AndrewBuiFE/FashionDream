import React from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ShippingAddress from '../../../model/ShippingAddress/index';
import GlobalButton from '../../components/GlobalButton/index';
import Modalheader from '../../components/ModalHeader/index';
import InputSection from '../../screens/PaymentScreen/InputSection/index';
import styles from './styles';
ShippingModal.propTypes = {};
ShippingModal.defaultProps = {};
let newShip = new ShippingAddress();
export default function ShippingModal(props) {
  const {isVisible, onModalHidden, onButtonClick, item} = props;
  console.log("ship item: ", item)
  const insets = useSafeAreaInsets();
  const date = new Date().getTime();
  newShip.Id = date;
  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackdropPress={() => {
        if (onModalHidden) onModalHidden();
      }}
      onModalHide={() => {
        console.log('On modal hide');
        // onButtonClick(newShip);
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
        <KeyboardAvoidingView behavior={'position'}>
          <Modalheader />
          <View style={styles.titleSection}>
            <Text style={styles.titleText}>Shipping Addresses</Text>
          </View>
          {/* <View style={styles.inputContainer}>
            <TextInput
              placeholder="Full name"
              placeholderTextColor={'#ABB4BD'}
              style={styles.textInput}
              value={name}
              onChangeText={value => {
                setName(value);
                newShip.CustomerName = value;
              }}
            />
          </View> */}
          <InputSection
            title={'Full name'}
            content={item.customerName}
            handleInput={value => {
              newShip.CustomerName = value;
            }}
          />
          <InputSection
            title={'Address'}
            content={item.address}
            handleInput={value => {
              newShip.Address = value;
            }}
          />
          <InputSection
            title={'City'}
            content={item.city}
            handleInput={value => {
              newShip.City = value;
            }}
          />
          <InputSection
            title={'State/Province/Region'}
            content={item.state}
            handleInput={value => {
              newShip.State = value;
            }}
          />
          <InputSection
            title={'Zip code (Postal Code)'}
            content={item.zipcode.toString()}
            handleInput={value => {
              newShip.Zipcode = value;
            }}
          />
          <InputSection
            title={'Country'}
            content={item.country}
            handleInput={value => {
              newShip.Country = value;
            }}
          />
          <GlobalButton
            actionText="SAVE ADDRESS"
            marginTop={40}
            action={() => {
              console.log(newShip);
              onModalHidden();
            }}
          />
        </KeyboardAvoidingView>
      </View>
    </ReactNativeModal>
  );
}
