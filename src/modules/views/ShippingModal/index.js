import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ShippingAddress from '../../../model/ShippingAddress';
import GlobalButton from '../../components/GlobalButton/index';
import Modalheader from '../../components/ModalHeader/index';
import InputSection from '../../screens/PaymentScreen/InputSection/index';
import styles from './styles';
ShippingModal.propTypes = {};
ShippingModal.defaultProps = {};
var newShip = new ShippingAddress();
var changeData = false;
export default function ShippingModal(props) {
  const {isVisible, onModalHidden, onButtonClick, item} = props;
  const insets = useSafeAreaInsets();
  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackdropPress={() => {
        if (onModalHidden) onModalHidden();
      }}
      onModalHide={() => {
        console.log('On modal hide');
        const date = new Date().getTime();
        newShip.id = date;
        if (newShip.address.length == 0) newShip.address = item.address;
        if (newShip.city.length == 0) newShip.city = item.city;
        if (newShip.country.length == 0)newShip.country = item.country;
        if (newShip.customerName.length == 0) newShip.customerName = item.customerName;
        if (newShip.state.length == 0) newShip.state = item.state;
        if (newShip.zipcode.length == 0) newShip.zipcode = item.zipcode;
        if(changeData) {
          onButtonClick(newShip);
          changeData = false;
        }

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
        <ScrollView>
          <InputSection
            title={'Full name'}
            content={item.customerName}
            handleInput={value => {
              newShip.customerName = value;
              changeData = true;
            }}
          />
          <InputSection
            title={'Address'}
            content={item.address}
            handleInput={value => {
              newShip.address = value;
              changeData = true;
            }}
          />
          <InputSection
            title={'City'}
            content={item.city}
            handleInput={value => {
              newShip.city = value;
              changeData = true;
            }}
          />
          <InputSection
            title={'State/Province/Region'}
            content={item.state}
            handleInput={value => {
              newShip.state = value;
              changeData = true;
            }}
          />
          <InputSection
            title={'Zip code (Postal Code)'}
            content={item.zipcode}
            handleInput={value => {
              newShip.zipcode = value;
              changeData = true;
            }}
          />
          <InputSection
            title={'Country'}
            content={item.country}
            handleInput={value => {
              newShip.country = value;
              changeData = true;
            }}
          />
        </ScrollView>
        <GlobalButton
          actionText="SAVE ADDRESS"
          marginTop={40}
          action={() => {
            onModalHidden();
          }}
        />
      </View>
    </ReactNativeModal>
  );
}
