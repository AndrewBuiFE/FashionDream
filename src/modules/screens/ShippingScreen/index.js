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
const SHIP = [
  {
    id: '1',
    name: 'Jane Doe',
    address: '3 Newbridge Court Chino Hills, CA 91709, United States',
    isShowCheck: true,
    isCheck: true,
  },
  {
    id: '2',
    name: 'Jane Doe',
    address: '3 Newbridge Court Chino Hills, CA 91709, United States',
    isShowCheck: true,
    isCheck: true,
  },
  {
    id: '3',
    name: 'Jane Doe',
    address: '3 Newbridge Court Chino Hills, CA 91709, United States',
    isShowCheck: true,
    isCheck: true,
  },
  {
    id: '4',
    name: 'Jane Doe',
    address: '3 Newbridge Court Chino Hills, CA 91709, United States',
    isShowCheck: true,
    isCheck: true,
  },
  {
    id: '5',
    name: 'Jane Doe',
    address: '3 Newbridge Court Chino Hills, CA 91709, United States',
    isShowCheck: true,
    isCheck: false,
  },
];
const Divider = () => <View style={{height: 24}}></View>;
export default function ShippingScreen(props) {
  const [isAddShipAddress, setAddShipAddress] = useState(false);
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
        <View style={styles.contentContainer}>
          <View style={{marginTop: 0, flex: 1}}>
            <FlatList
              data={SHIP}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={Divider}
              ListFooterComponentStyle={{
                marginTop: 10,
                alignItems: 'flex-end',
              }}
            />
          </View>
          <AddButton setShowAdd={setAddShipAddress} bottom={insets.bottom}/>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
