import React, { useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets
} from 'react-native-safe-area-context';
import { AppIcons } from '../../../general/constants/AppResource';
import AddButton from '../../components/AddButton/index';
import AppHeaderNormal from '../../components/AppHeaderNormal/index';
import ShippingModal from '../../views/ShippingModal/index';
import InfoCell from '../CheckoutScreen/InfoCell/index';
import styles from './styles';
let SHIP = [
  {
    id: '1',
    name: 'Jane',
    address: 'United States',
    isShowCheck: true,
    isCheck: false,
  },
  {
    id: '2',
    name: 'Doe',
    address: '3 Newbridge Court Chino Hills',
    isShowCheck: true,
    isCheck: false,
  },
  {
    id: '3',
    name: 'Janoe',
    address: 'CA 91709, United States',
    isShowCheck: true,
    isCheck: false,
  },
  {
    id: '4',
    name: 'Ja Do',
    address: '3 Newbridge Court Chino Hills, CA 91709',
    isShowCheck: true,
    isCheck: false,
  },
  {
    id: '5',
    name: 'J',
    address: '3 Newbridge Court Chino Hills, CA 91709, United States',
    isShowCheck: true,
    isCheck: false,
  },
];
const Divider = () => <View style={{height: 24}}></View>;
export default function ShippingScreen(props) {
  const [isAddShipAddress, setAddShipAddress] = useState(false);
  const [shipData, setShipData] = useState(SHIP);
  const insets = useSafeAreaInsets();
  const renderItem = ({item}) => {
    return (
      <InfoCell
        name={item.name}
        actionType={'Edit'}
        address={item.address}
        isShowCheck={item.isShowCheck}
        isCheck={item.isCheck}
      />
    );
  };
  return (
    <SafeAreaProvider>
      <View style={styles.checkoutContainer}>
        <AppHeaderNormal title="Shipping Addresses">
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
        <ShippingModal
          isVisible={isAddShipAddress}
          onModalHidden={() => {
            setAddShipAddress(false);
          }}
          onButtonClick={ship => {
            console.log("ship: ", ship);
            let tempShipData = [...shipData];
            tempShipData.push(ship);
            console.log("Temp ship: ", tempShipData);
            // setShipData(tempShipData);
          }}
        />
        <View style={styles.contentContainer}>
          <View style={{marginTop: 0, flex: 1}}>
            <FlatList
              data={shipData}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={Divider}
              ListFooterComponentStyle={{
                marginTop: 10,
                alignItems: 'flex-end',
              }}
            />
          </View>
          <AddButton setShowAdd={setAddShipAddress} bottom={insets.bottom} />
        </View>
      </View>
    </SafeAreaProvider>
  );
}
