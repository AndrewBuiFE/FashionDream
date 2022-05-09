import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppIcons, AppImages} from '../../../general/constants/AppResource';
import {ScreenNames} from '../../../general/constants/ScreenNames';
import AppHeaderNormal from '../../components/AppHeaderNormal/index';
import GlobalButton from '../../components/GlobalButton/index';
import styles from './styles';
CheckOutScreen.propTypes = {};
CheckOutScreen.defaultProps = {};
function CheckOutScreen(props) {
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
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Shipping address</Text>
          </View>
          <View style={styles.shippingContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 18,
              }}>
              <Text style={styles.name}>Jane Doe</Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate(ScreenNames.paymentScreen);
                }}>
                <Text style={styles.action}>Change</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.address}>
              3 Newbridge Court Chino Hills, CA 91709, United States
            </Text>
          </View>
          <View style={styles.paymentContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.title}>Payment</Text>
              <TouchableOpacity>
                <Text style={styles.action}>Change</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardSection}>
              <View style={styles.card}>
                <Image source={AppImages.card} />
              </View>
              <Text style={styles.text}>**** **** **** 3947</Text>
            </View>
          </View>
          <View style={[styles.titleContainer, {marginTop: 51}]}>
            <Text style={styles.title}>Delivery method</Text>
          </View>
          <View style={styles.deliveryContainer}>
            <Image />
            <Image />
            <Image />
          </View>
          <View style={styles.orderContainer}>
            <View style={styles.orderRow}>
              <Text style={styles.orderTitle}>Order: </Text>
              <Text style={styles.price}>$121</Text>
            </View>
            <View style={styles.orderRow}>
              <Text style={styles.orderTitle}>Delivery: </Text>
              <Text style={styles.price}>$23</Text>
            </View>
            <View style={[styles.orderRow, {marginBottom: 0}]}>
              <Text style={[styles.orderTitle, {fontSize: 16, lineHeight: 26}]}>
                Summary:
              </Text>
              <Text style={[styles.price, {fontSize: 18, lineHeight: 22}]}>
                $144
              </Text>
            </View>
          </View>
        </View>
        <GlobalButton actionText="SUBMIT ORDER" marginTop={23} />
      </View>
    </SafeAreaProvider>
  );
}
export default CheckOutScreen;
