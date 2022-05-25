import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets
} from 'react-native-safe-area-context';
import { AppIcons } from '../../../general/constants/AppResource';
import AddButton from '../../components/AddButton/index';
import AppHeaderNormal from '../../components/AppHeaderNormal/index';
import CheckBox from '../../components/CheckBox/index';
import AddCardModal from '../../views/AddCardModal/index';
import Card from './Card/index';
import styles from './styles';
PaymentScreen.propTypes = {};
PaymentScreen.defaultProps = {};
const CARD = [
  {
    id: 1,
    number: '* * * * * * * * * * * * 3947',
    holder: 'Hoang',
    exp: '05/23',
    isDefault: true,
  },
  // {
  //   id: 2,
  //   number: '* * * * * * * * * * * * 3947',
  //   holder: 'Hoang',
  //   exp: '05/23',
  //   isDefault: false,
  // },
  // {
  //   id: 3,
  //   number: '* * * * * * * * * * * * 3947',
  //   holder: 'Hoang',
  //   exp: '05/23',
  //   isDefault: false,
  // },
];
const Divider = () => <View style={{height: 39}}></View>;
function PaymentScreen(props) {
  const [isShowAddCard, setShowAddCard] = useState(false);
  const insets = useSafeAreaInsets();
  console.log(insets);
  const renderItem = ({item}) => {
    return (
      <View>
        <Card item={item} />
        <CheckBox
          isCheck={item.isDefault}
          message={'Use as default payment method'}
          marginTop={25}
        />
      </View>
    );
  };
  return (
    <SafeAreaProvider>
      <View style={styles.checkoutContainer}>
        <AppHeaderNormal title="Payment methods">
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
        <AddCardModal
          isVisible={isShowAddCard}
          onModalHidden={() => {
            setShowAddCard(false);
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
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Your payment cards</Text>
          </View>
          <View style={{marginTop: 29, flex: 1}}>
            <FlatList
              data={CARD}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={Divider}
              ListFooterComponentStyle={{
                marginTop: 10,
                alignItems: 'flex-end',
              }}
            />
          </View>
          <AddButton setShowAdd={setShowAddCard} bottom={insets.bottom} />
        </View>
      </View>
    </SafeAreaProvider>
  );
}
export default PaymentScreen;
