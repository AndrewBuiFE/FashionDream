import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {convertCompilerOptionsFromJson, isMetaProperty} from 'typescript';
import {AppIcons} from '../../../general/constants/AppResource';
import {AppConfig} from '../../../general/constants/Global';
import {ScreenNames} from '../../../general/constants/ScreenNames';
import commonApi from '../../../libs/api/commonApi';
import AppHeader from '../../components/AppHeader/index';
import GlobalButton from '../../components/GlobalButton/index';
import PromoCodeModal from '../../views/PromoCodeModal/index';
import Success from '../../views/Success/index';
import {setCartNewThing} from './CartSlice';
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
    let discountPrice =
      (item.productInfo.price -
        item.productInfo.price * (item.productInfo.discountPercent / 100)) *
      item.amount;
    total += discountPrice;
    discountTotal +=
      item.productInfo.price *
      (item.productInfo.discountPercent / 100) *
      item.amount;
  }
  return [total, discountTotal];
};
function sortProduct(a, b) {
  if (a.productInfo.name.localeCompare(b.productInfo.name)) {
    return a.productInfo.name.localeCompare(b.productInfo.name);
  } else if (a.color.localeCompare(b.color)) {
    return a.color.localeCompare(b.color);
  } else if (a.size.localeCompare(b.size)) {
    return a.size.localeCompare(b.size);
  } else return 0;
}
const cartUtils = new CartUtils();
function CartScreen(props) {
  const [isShowPromoModal, setShowPromoModal] = useState(false);
  const [isShowSuccess, setShowSuccess] = useState(false);
  // const [quantity, setQuantity] = useState(0);
  const {cartData} = useSelector(state => state.cart);
  let [tempTotal, tempDiscountTotal] = calculateTotal(cartData.listProduct);
  // const [total, setTotal] = useState(tempTotal);
  // const [discountTotal, setDiscountTotal] = useState(tempDiscountTotal);
  const dispatch = useDispatch();
  console.log('Cart Data: ', cartData);
  const renderItem = ({item}) => {
    return (
      <BagItem
        productItem={item}
        handleIncrement={newAmount => {
          var newItem = item;
          newItem.amount = newAmount;
          cartUtils.updateCartItemQuantity(newItem, cartData);
          // let [total, discountTotal] = calculateTotal(cartData.listProduct);
          // setTotal(total);
          // setDiscountTotal(discountTotal);
          console.log('Increase!');
        }}
        handleDescreasement={newAmount => {
          console.log('Descrease!');
          var newItem = item;
          newItem.amount = newAmount;
          cartUtils.updateCartItemQuantity(newItem, cartData);
          // let [total, discountTotal] = calculateTotal(cartData.listProduct);
          // setTotal(total);
          // setDiscountTotal(discountTotal);
        }}
      />
    );
  };
  useEffect(() => {
    if (cartData.listProduct.length > 0) {
      let listProduct = cartUtils.getCartProduct(cartData);
      let params = {
        productList: listProduct,
      };
      commonApi.addCart(params).then(res => {
        console.log('Add cart? ', res);
      });
    }
  }, []);
  // useEffect(() => {
  //   // commonApi.getCartProduct().then(res => {
  //   //   console.log("Cart: ", res.data.data);
  //   // });
  // });
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
        <FlatList
          data={cartData.listProduct.sort(sortProduct)}
          renderItem={renderItem}
          extraData={cartData.listProduct}
        />
        <PromoCode
          setShowPromoModal={setShowPromoModal}
          marginTop={25}
          inputValue={promoCodeValue}
        />
        <View style={styles.total}>
          <Text style={styles.totalText}>Discount:</Text>
          <Text style={styles.priceText}>${tempDiscountTotal}</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.totalText}>Total amount:</Text>
          <Text style={styles.priceText}>${tempTotal}</Text>
        </View>
        <GlobalButton
          actionText="CHECK OUT"
          marginTop={24}
          action={() => {
            dispatch(setCartNewThing(false));
            if (cartData.listProduct.length === 0) {
              Alert.alert('No Item', "Cart has no item. Can't check out");
            } else {
              props.navigation.navigate(ScreenNames.checkoutScreen, {
                totalAmount: tempTotal,
              });
            }
          }}
        />
      </View>
    </SafeAreaProvider>
  );
}
export default CartScreen;
