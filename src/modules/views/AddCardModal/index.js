import React from 'react';
import { Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PaymentCard from '../../../model/PaymentCard/index';
import CheckBox from '../../components/CheckBox/index';
import GlobalButton from '../../components/GlobalButton/index';
import Modalheader from '../../components/ModalHeader/index';
import InputSection from '../../screens/PaymentScreen/InputSection/index';
import styles from './styles';
AddCardModal.propTypes = {};
AddCardModal.defaultProps = {};
var isCheck = true;
let newCard = new PaymentCard();

export default function AddCardModal(props) {
  const {isVisible, onModalHidden, onButtonClick} = props;
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
        onButtonClick(newCard);
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
          <Text style={styles.titleText}>Add new card</Text>
        </View>
        {/* <View style={styles.inputContainer}>
          <TextInput
            placeholder="Name on card"
            placeholderTextColor={'#ABB4BD'}
            style={styles.textInput}
          />
        </View> */}
        <InputSection
          title={''}
          content={'Name on card'}
          handleInput={value => {
            newCard.CardName = value;
          }}
        />
        <InputSection
          title={'Card number'}
          content={'5546 8205 3693 3947'}
          handleInput={value => {
            newCard.CardNumber = value;
          }}
        />
        <InputSection
          title={'Expire date'}
          content={'05/22'}
          handleInput={value => {
            newCard.ExpDate = value;
          }}
        />
        <InputSection
          title={'CVV'}
          content={'567'}
          handleInput={value => {
            newCard.CVV = value;
          }}
        />
        <CheckBox
          isCheck={false}
          message={'Set as default payment method'}
          marginLeft={16}
          marginTop={20}
        />
        <GlobalButton
          actionText="ADD CARD"
          marginTop={25}
          action={() => {
            onModalHidden();
          }}
        />
      </View>
    </ReactNativeModal>
  );
}
