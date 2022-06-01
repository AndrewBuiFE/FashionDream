import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppIcons } from '../../../general/constants/AppResource';
import AppHeader from '../../components/AppHeader/index';
import OrderCell from './OrderCell/index';
import styles from './styles';
OrderScreen.propTypes = {};
OrderScreen.defaultProps = {};
const ORDER_DATA = [
  {
    id: 1, 
    orderNo: '№1947034',
    date: '12-06-2000',
    quantity: 3,
    trackingNo: "IW3475453455",
    totalAmount: 112,
    status: "Delivered",
  }
  , {
    id: 2, 
    orderNo: '№1947034',
    date: '12-07-2000',
    quantity: 3,
    trackingNo: "IW3475453455",
    totalAmount: 112,
    status: "Delivered",
  }
  , {
    id: 3, 
    orderNo: '№1947034',
    date: '12-08-2000',
    quantity: 3,
    trackingNo: "IW3475453455",
    totalAmount: 112,
    status: "Delivered",
  },
  {
    id: 4, 
    orderNo: '№1947034',
    date: '12-09-2000',
    quantity: 3,
    trackingNo: "IW3475453455",
    totalAmount: 112,
    status: "Delivered",
  },
]
const Divider = () => (
  <View style = {{height: 24}}>

  </View>
)
function OrderScreen(props) {
  const renderItem = ({item}) => (
    <OrderCell 
    item = {item}
    />
  )
  return (
    <SafeAreaProvider>
      <View style={styles.orderContainer}>
        <AppHeader title='My orders'>
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
        <View style={styles.status}>
          <TouchableOpacity style={[styles.statusContainer]}>
            <Text style={styles.typeText}>Delivered</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statusContainer}>
            <Text style={styles.typeText}>Processing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statusContainer}>
            <Text style={styles.typeText}>Canceled</Text>
          </TouchableOpacity>
        </View>
        <View
         style = {{height: 30}}></View>
        <FlatList data = {ORDER_DATA} renderItem = {renderItem} ItemSeparatorComponent={Divider} showsVerticalScrollIndicator={false}/>
      </View>
    </SafeAreaProvider>
  );
}
export default OrderScreen;
