import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PAYMENT_CARD, SHIPPING_ADDRESS } from '../../../data/index';
import { AppIcons, AppImages } from '../../../general/constants/AppResource';
import AppHeaderNormal from '../../components/AppHeaderNormal/index';
import GlobalButton from '../../components/GlobalButton/index';
import AddCardModal from '../../views/AddCardModal/index';
import ShippingModal from '../../views/ShippingModal/index';
import Success from '../../views/Success/index';
import InfoCell from './InfoCell/index';
import styles from './styles';
CheckOutScreen.propTypes = {};
CheckOutScreen.defaultProps = {};
let delivery = 20;
function CheckOutScreen(props) {
  const [isShowSuccess, setShowSuccess] = useState(false);
  const [isAddShipAddress, setAddShipAddress] = useState(false);
  const [isShowAddCard, setShowAddCard] = useState(false);
  const [cardData, setCardData] = useState(PAYMENT_CARD);
  const [shipData, setShipData] = useState(SHIPPING_ADDRESS);
  const {totalAmount} = props.route.params;
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
          onMenuClick={menu => {
            switch (menu) {
              case 0:
                console.log('0');
                break;
              case 1:
                console.log('1');
                break;
              case 2:
                console.log('2');
                break;
              case 3:
                console.log('3');
                break;
              case 4:
                console.log('4');
                break;
              default:
                console.log('-1');
                break;
            }
          }}
        />
        <ShippingModal
          isVisible={isAddShipAddress}
          item = {shipData}
          onModalHidden={() => {
            setAddShipAddress(false);
          }}
          onButtonClick={ship => {
            let tempShipData = [...shipData];
            tempShipData.push(ship);
          }}
        />
        <AddCardModal
          isVisible={isShowAddCard}
          item = {cardData}
          onModalHidden={() => {
            setShowAddCard(false);
          }}
          onButtonClick={card => {
            let tempCardData = [...cardData];
            tempCardData.push(card);
          }}
        />
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Shipping address</Text>
          </View>
          <InfoCell
            name={shipData.customerName}
            actionType={'Change'}
            address={shipData.address}
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
              <Text style={styles.text}>{cardData.cardNumber}</Text>
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
              <Text style={styles.price}>${delivery}</Text>
            </View>
            <View style={[styles.orderRow, {marginBottom: 0}]}>
              <Text style={[styles.orderTitle, {fontSize: 16, lineHeight: 26}]}>
                Summary:
              </Text>
              <Text style={[styles.price, {fontSize: 18, lineHeight: 22}]}>
                ${totalAmount + delivery}
              </Text>
            </View>
          </View>
        </View>
        <GlobalButton
          actionText="SUBMIT ORDER"
          marginTop={23}
          action={() => {
            setShowSuccess(true);
          }}
        />
      </View>
    </SafeAreaProvider>
  );
}
export default CheckOutScreen;
