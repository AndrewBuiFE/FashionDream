import React from 'react';
import { ScrollView, Text, View } from 'react-native';
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
var changeData = false;
let newCard = new PaymentCard();

export default function AddCardModal(props) {
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
        newCard.id = date;
        if (newCard.cardNumber.length == 0) newCard.cardNumber = item.cardNumber;
        if (newCard.exp.length == 0) newCard.exp = item.exp;
        if (newCard.cvv == 0) newCard.cvv = item.cvv;
        if (newCard.holderName.length == 0) newCard.holderName = item.holderName;
        if (changeData) {
          onButtonClick(newCard);
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
          <Text style={styles.titleText}>Payment Methods</Text>
        </View>
        <View style={{marginTop: 10}}>
          <Card item={item} />
        </View>
        {/* <View style={styles.inputContainer}>
          <TextInput
            placeholder="Name on card"
            placeholderTextColor={'#ABB4BD'}
            style={styles.textInput}
          />
        </View> */}
        <ScrollView>
          <InputSection
            title={'Name on card'}
            content={item.holderName}
            handleInput={value => {
              newCard.holderName = value;
              changeData = true;
            }}
          />
          <InputSection
            title={'Card number'}
            content={item.cardNumber}
            handleInput={value => {
              newCard.cardNumber = value;
              changeData = true;
            }}
          />
          <InputSection
            title={'Expire date'}
            content={item.exp}
            handleInput={value => {
              newCard.exp = value;
              changeData = true;
            }}
          />
          <InputSection
            title={'CVV'}
            content={item.cvv.toString()}
            handleInput={value => {
              newCard.cvv = value;
              changeData = true;
            }}
          />
        </ScrollView>
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
