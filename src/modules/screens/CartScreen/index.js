import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { AppIcons } from '../../../general/constants/AppResource';
import { ScreenNames } from '../../../general/constants/ScreenNames';
import AppHeader from '../../components/AppHeader/index';
import GlobalButton from '../../components/GlobalButton/index';
import PromoCodeModal from '../../views/PromoCodeModal/index';
import Success from '../../views/Success/index';
import CartUtils from './CartUtils';
import BagItem from './components/BagItem/index';
import PromoCode from './components/PromoCode/index';
import styles from './styles';
CartScreen.propTypes = {};
CartScreen.defaultProps = {};
let promoCodeValue = '';

const calculateTotal = cartItems => {
  let total = 0;
  let discountTotal = 0;
  for (let item of cartItems) {
    let discountPrice = (item.price - item.price * (item.discountPercent / 100))*item.quantity;
    total += discountPrice;
    discountTotal += (item.price * (item.discountPercent /100))*item.quantity;
  }
  return [total, discountTotal];
};
const cartUtils = new CartUtils();
function CartScreen(props) {
  const [isShowPromoModal, setShowPromoModal] = useState(false);
  const [isShowSuccess, setShowSuccess] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const {cartData} = useSelector(state => state.cart);
  let [tempTotal, tempDiscountTotal] = calculateTotal(cartData.ListProduct);
  // console.log("total: ", tempTotal, tempDiscountTotal);
  const [total, setTotal] = useState(tempTotal);
  const [discountTotal, setDiscountTotal] = useState(tempDiscountTotal);
  const renderItem = ({item}) => {
    return (
      <BagItem
        item={item}
        handleIncrement={(quantity) => {
          item.quantity = quantity;
          cartUtils.updateCartItem(item, cartData);
          let [total, discountTotal] = calculateTotal(cartData.ListProduct);
          setTotal(total);
          setDiscountTotal(discountTotal);
          console.log('Increase!');
        }}
        handleDescreasement={(quantity) => {
          console.log('Descrease!');
          item.quantity = quantity;
          cartUtils.updateCartItem(item, cartData);
          let [total, discountTotal] = calculateTotal(cartData.ListProduct);
          setTotal(total);
          setDiscountTotal(discountTotal);
        }}
      />
    );
  };
  // console.log("Total", calculateTotal(cartData.ListProduct));
  console.log("Cart data: ", cartData);
  return (
    <SafeAreaProvider>
      <View style={styles.cartContainer}>
        <AppHeader title="My Bag">
          <>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}>
              <Image source={AppIcons.left_arrow} />
            </TouchableOpacity>
          </>
          <>
            <TouchableOpacity>
              <Image source={AppIcons.search} />
            </TouchableOpacity>
          </>
        </AppHeader>
        <PromoCodeModal
          isVisible={isShowPromoModal}
          onModalHidden={() => {
            setShowPromoModal(false);
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
          getPromoCode={promoCode => {
            promoCodeValue = promoCode;
          }}
        />
        <Success
          isVisible={isShowSuccess}
          onModalHidden={() => {
            setShowSuccess(false);
          }}
        />
        <FlatList data={cartData.ListProduct} renderItem={renderItem} />
        <PromoCode
          setShowPromoModal={setShowPromoModal}
          marginTop={25}
          inputValue={promoCodeValue}
        />
        <View style={styles.total}>
          <Text style={styles.totalText}>Discount:</Text>
          <Text style={styles.priceText}>${discountTotal}</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.totalText}>Total amount:</Text>
          <Text style={styles.priceText}>${total}</Text>
        </View>
        <GlobalButton
          actionText="CHECK OUT"
          marginTop={24}
          action={() => {
            props.navigation.navigate(ScreenNames.checkoutScreen, {
              totalAmount: total,
            });
          }}
        />
      </View>
    </SafeAreaProvider>
  );
}
export default CartScreen;
