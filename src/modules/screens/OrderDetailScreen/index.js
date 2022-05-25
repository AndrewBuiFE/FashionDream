import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppIcons } from '../../../general/constants/AppResource';
import { ScreenNames } from '../../../general/constants/ScreenNames';
import AppHeaderNormal from '../../components/AppHeaderNormal/index';
import GlobalButton from '../../components/GlobalButton/index';
import BagItem from '../CartScreen/components/BagItem/index';
import styles from './styles';
OrderDetailScreen.propTypes = {};
OrderDetailScreen.defaultProps = {};

function OrderDetailScreen(props) {
  let item = props.route.params.order;
  return (
    <SafeAreaProvider>
      <ScrollView style={styles.orderContainer} showsVerticalScrollIndicator={false}>
        <AppHeaderNormal title="Order Details">
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
        </AppHeaderNormal>
        <View style={styles.generalSection}>
          <View style={styles.firstRow}>
            <Text style={styles.text}>{item.orderNo}</Text>
            <Text style={styles.title}>{item.date}</Text>
          </View>
          <View style={styles.secondRow}>
            <View style={styles.tracking}>
              <Text style={styles.title}>Tracking number: </Text>
              <Text style={styles.text}>{item.trackingNo}</Text>
            </View>
            <View>
              <Text style={styles.status}>{item.status}</Text>
            </View>
          </View>
        </View>
        <View style={styles.titleSection}>
          <Text style={styles.text}>
            {item.quantity} {item.quantity > 1 ? 'items' : 'item'}
          </Text>
        </View>
        <BagItem />
        <BagItem />
        <BagItem />
        <View style={[styles.titleSection,  {marginTop: 34}]}>
          <Text style={[styles.text]}>Order information</Text>
        </View>
        <View style={styles.orderInfo}>
          <View style={[styles.infoCell, {marginTop: 15}]}>
            <Text style={styles.title}>Shipping address: </Text>
            <Text style={[styles.text, {marginLeft: 10, flex: 1, flexWrap: 'wrap'}]} numberOfLines={2}>
              3 Newbridge Court ,Chino Hills, CA 91709, United States
            </Text>
          </View>
          <View style={styles.infoCell}>
            <Text style={styles.title}>Payment method: </Text>
            <Image />
            <Text style={[styles.text, {marginLeft: 12}]}>**** **** **** 3947</Text>
          </View>
          <View style={styles.infoCell}>
            <Text style={styles.title}>Delivery method: </Text>
            <Text style={[styles.text, {marginLeft: 17}]}>FedEx, 3 days, 15$</Text>
          </View>
          <View style={styles.infoCell}>
            <Text style={styles.title}>Discount: </Text>
            <Text style={[styles.text, {marginLeft: 62}]}>10%, Personal promo code</Text>
          </View>
          <View style={styles.infoCell}>
            <Text style={styles.title}>Total amount: </Text>
            <Text style={[styles.text, {marginLeft: 36}]}>133$</Text>
          </View>
        </View>
      <View style = {styles.buttonArea}>
      <GlobalButton width={160} height={36} actionText='Reorder'/>
        <GlobalButton width={160} height={36} actionText='Leave feedback' action={() => {
          props.navigation.navigate(ScreenNames.ratingScreen)
        }}/>
      </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
export default OrderDetailScreen;
