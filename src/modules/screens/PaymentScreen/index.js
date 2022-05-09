import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppIcons} from '../../../general/constants/AppResource';
import AppHeaderNormal from '../../components/AppHeaderNormal/index';
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
  {
    id: 2,
    number: '* * * * * * * * * * * * 3947',
    holder: 'Hoang',
    exp: '05/23',
    isDefault: false,
  },
  {
    id: 3,
    number: '* * * * * * * * * * * * 3947',
    holder: 'Hoang',
    exp: '05/23',
    isDefault: false,
  },
];
const Divider = () => <View style={{height: 39}}></View>;
const Add = () => (
  <TouchableOpacity style={styles.add}>
    <Image source={AppIcons.add_inactive} />
  </TouchableOpacity>
);
function PaymentScreen(props) {
  const renderItem = ({item}) => {
    return (
      <View>
        <Card item={item} />
        <View style={styles.check}>
          {item.isDefault ? (
            <TouchableOpacity>
              <Image source={AppIcons.checkbox_on} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image source={AppIcons.checkbox_inactive} />
            </TouchableOpacity>
          )}
          <Text style={styles.boxText}>Use as default payment method</Text>
        </View>
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
              ListFooterComponent={Add}
              ListFooterComponentStyle={{
                marginTop: 10,
                alignItems: 'flex-end',
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
export default PaymentScreen;
