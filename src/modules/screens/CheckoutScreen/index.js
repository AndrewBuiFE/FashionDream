import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { CHECKOUT } from '../../../data/index';
import { AppIcons, AppImages } from '../../../general/constants/AppResource';
import CheckOut from '../../../model/CheckOut';
import AppHeaderNormal from '../../components/AppHeaderNormal/index';
import GlobalButton from '../../components/GlobalButton/index';
import AddCardModal from '../../views/AddCardModal/index';
import ShippingModal from '../../views/ShippingModal/index';
import Success from '../../views/Success/index';
import CheckoutUtils from './CheckoutUtils';
import InfoCell from './InfoCell/index';
import styles from './styles';
CheckOutScreen.propTypes = {};
CheckOutScreen.defaultProps = {};
var checkouUtils = new CheckoutUtils();
var checkoutData = new CheckOut();
function CheckOutScreen(props) {
  const [isShowSuccess, setShowSuccess] = useState(false);
  const [isAddShipAddress, setAddShipAddress] = useState(false);
  const [isShowAddCard, setShowAddCard] = useState(false);
  const {totalAmount} = props.route.params;
  const {cardData, shipData} = useSelector(state => state.checkout);
  const [paymentCard, setPaymentCard] = useState(cardData);
  const [shippingAddress, setShippingAddress] = useState(shipData);
  return (
    <SafeAreaProvider>
      <View style={styles.checkoutContainer}>
        <AppHeaderNormal title="Checkout">
          <>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}>
              <Image source={AppIcons.left_arrow} />
            </TouchableOpacity>
          </>
          <></>
        </AppHeaderNormal>
        <Success
          isVisible={isShowSuccess}
          onModalHidden={() => {
            setShowSuccess(false);
          }}
        />
        <ShippingModal
          isVisible={isAddShipAddress}
          item = {shippingAddress}
          onModalHidden={() => {
            setAddShipAddress(false);
          }}
          onButtonClick={ship => {
            setShippingAddress(ship);
            checkouUtils.saveShippingAddress(ship);
          }}
        />
        <AddCardModal
          isVisible={isShowAddCard}
          item = {paymentCard}
          onModalHidden={() => {
            setShowAddCard(false);
          }}
          onButtonClick={card => {
            setPaymentCard(card);
            checkouUtils.saveCardData(card);
          }}
        />
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Shipping address</Text>
          </View>
          <InfoCell
            name={shippingAddress.customerName}
            actionType={'Change'}
            address={shippingAddress.address}
            isShowCheck={false}
            action={() => {
              setAddShipAddress(true);
              // props.navigation.navigate(ScreenNames.shippingScreen);
            }}
          />
          <View style={styles.paymentContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.title}>Payment</Text>
              <TouchableOpacity
                onPress={() => {
                  // props.navigation.navigate(ScreenNames.paymentScreen);
                  setShowAddCard(true);
                }}>
                <Text style={styles.action}>Change</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardSection}>
              <View style={styles.card}>
                <Image source={AppImages.card} />
              </View>
              <Text style={styles.text}>{paymentCard.cardNumber}</Text>
            </View>
          </View>
          <View style={[styles.titleContainer, {marginTop: 51}]}>
            <Text style={styles.title}>Delivery method</Text>
          </View>
          <View style={styles.deliveryContainer}>
            <Image source={AppImages.fedex} />
            <Image source={AppImages.usps} />
            <Image source={AppImages.dhl} />
          </View>
          <View style={styles.orderContainer}>
            <View style={styles.orderRow}>
              <Text style={styles.orderTitle}>Order: </Text>
              <Text style={styles.price}>${totalAmount}</Text>
            </View>
            <View style={styles.orderRow}>
              <Text style={styles.orderTitle}>Delivery: </Text>
              <Text style={styles.price}>${CHECKOUT.delivery}</Text>
            </View>
            <View style={[styles.orderRow, {marginBottom: 0}]}>
              <Text style={[styles.orderTitle, {fontSize: 16, lineHeight: 26}]}>
                Summary:
              </Text>
              <Text style={[styles.price, {fontSize: 18, lineHeight: 22}]}>
                ${totalAmount + CHECKOUT.delivery}
              </Text>
            </View>
          </View>
        </View>
        <GlobalButton
          actionText="SUBMIT ORDER"
          marginTop={23}
          action={() => {
            checkoutData.delivery = CHECKOUT.delivery;
            checkoutData.paymentCard = paymentCard;
            checkoutData.shippingAddress = shippingAddress;
            checkouUtils.saveCheckout(checkoutData)
            setShowSuccess(true);
          }}
        />
      </View>
    </SafeAreaProvider>
  );
}
export default CheckOutScreen;
