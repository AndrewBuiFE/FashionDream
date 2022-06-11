import React from 'react';
import { Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PaymentCard from '../../../model/PaymentCard/index';
import GlobalButton from '../../components/GlobalButton/index';
import Modalheader from '../../components/ModalHeader/index';
import Card from '../../screens/PaymentScreen/Card/index';
import InputSection from '../../screens/PaymentScreen/InputSection/index';
import styles from './styles';
AddCardModal.propTypes = {};
AddCardModal.defaultProps = {};
var isCheck = true;
let newCard = new PaymentCard();

export default function AddCardModal(props) {
  const {isVisible, onModalHidden, onButtonClick, item} = props;
  console.log('item: ', item);
  const insets = useSafeAreaInsets();
  const date = new Date().getTime();
  newCard.Id = date;
  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackdropPress={() => {
        if (onModalHidden) onModalHidden();
      }}
      onModalHide={() => {
        console.log('On modal hide');
        // onButtonClick(newCard);
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
          <Text style={styles.titleText}>Payment Methods</Text>
        </View>
        <View style = {{marginTop: 10}}>
          <Card item={item} />
        </View>
        {/* <View style={styles.inputContainer}>
          <TextInput
            placeholder="Name on card"
            placeholderTextColor={'#ABB4BD'}
            style={styles.textInput}
          />
        </View> */}
        <InputSection
          title={'Name on card'}
          content={item.holderName}
          handleInput={value => {
            newCard.CardName = value;
          }}
        />
        <InputSection
          title={'Card number'}
          content={item.cardNumber}
          handleInput={value => {
            newCard.CardNumber = value;
          }}
        />
        <InputSection
          title={'Expire date'}
          content={item.exp}
          handleInput={value => {
            newCard.ExpDate = value;
          }}
        />
        <InputSection
          title={'CVV'}
          content={item.cvv.toString()}
          handleInput={value => {
            newCard.CVV = value;
          }}
        />
        {/* <CheckBox
          isCheck={false}
          message={'Set as default payment method'}
          marginLeft={16}
          marginTop={20}
        /> */}
        <GlobalButton
          actionText="SAVE CARD"
          marginTop={25}
          action={() => {
            onModalHidden();
          }}
        />
      </View>
    </ReactNativeModal>
  );
}
