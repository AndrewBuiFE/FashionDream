import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppIcons } from '../../../general/constants/AppResource';
import { ScreenNames } from '../../../general/constants/ScreenNames';
import AppHeader from '../../components/AppHeader/index';
import GlobalButton from '../../components/GlobalButton/index';
import PromoCodeModal from '../../views/PromoCodeModal/index';
import Success from '../../views/Success/index';
import BagItem from './components/BagItem/index';
import PromoCode from './components/PromoCode/index';
import styles from './styles';
CartScreen.propTypes = {};
CartScreen.defaultProps = {};
let promoCodeValue = '';
let BAG_DATA = [
  {
    id: '1',
    name: 'Hoang',
    size: 'L',
    color: 'black',
    basePrice: 20,
    itemQuantity: 2,
  },
  {
    id: '2',
    name: 'Hoa',
    size: 'M',
    color: 'blue',
    basePrice: 25,
    itemQuantity: 2,
  },
  {
    id: '3',
    name: 'Hoa',
    size: 'L',
    color: 'black',
    basePrice: 40,
    itemQuantity: 3,
  },
  {
    id: '4',
    name: 'Hoa',
    size: 'L',
    color: 'black',
    basePrice: 10,
    itemQuantity: 2,
  },
  {
    id: '5',
    name: 'Hoang',
    size: 'L',
    color: 'black',
    basePrice: 25,
    itemQuantity: 1,
  },
];
const calculateTotal = (itemData) => {
  let total = 0;
  for (let item of itemData) {
    total = total + item.basePrice * item.itemQuantity; 
  }
  return total;
}
function CartScreen(props) {
  let totalMoney = calculateTotal(BAG_DATA);
  const [isShowPromoModal, setShowPromoModal] = useState(false);
  const [isShowSuccess, setShowSuccess] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(totalMoney);
  const renderItem = ({item, index}) => {
    return <BagItem
      basePrice={item.basePrice}
      color={item.color}
      itemQuantity={item.itemQuantity}
      name={item.name}
      size={item.size}
      handleIncrement = {
        () => {
          console.log('Increase!');
          item.itemQuantity = item.itemQuantity + 1;
          // setQuantity(item.itemQuantity);
          console.log("Item quantity: ", item.itemQuantity);
          console.log("Total: ", calculateTotal(BAG_DATA));
          setTotal(calculateTotal(BAG_DATA));
        }
      }
      handleDescreasement = {
        () => {
          console.log('Descrease!');
          item.itemQuantity = item.itemQuantity - 1;
          // setQuantity(item.itemQuantity);
          console.log("Item quantity: ", item.itemQuantity);
          setTotal(calculateTotal(BAG_DATA));
          
        }
      }
    />
}
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
        <FlatList data={BAG_DATA} renderItem={renderItem} />
        <PromoCode
          setShowPromoModal={setShowPromoModal}
          marginTop={25}
          inputValue={promoCodeValue}
        />
        <View style={styles.total}>
          <Text style={styles.totalText}>Total amount:</Text>
          <Text style={styles.priceText}>${total}</Text>
        </View>
        <GlobalButton
          actionText="CHECK OUT"
          marginTop={24}
          action={() => {
            props.navigation.navigate(ScreenNames.checkoutScreen, {totalAmount: total});
          }}
        />
      </View>
    </SafeAreaProvider>
  );
}
export default CartScreen;
