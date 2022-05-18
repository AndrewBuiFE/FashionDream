import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {AppIcons} from '../../../general/constants/AppResource';
import AppHeaderNormal from '../../components/AppHeaderNormal/index';
import InfoCell from '../CheckoutScreen/InfoCell/index';
import AddButton from '../PaymentScreen/AddButton/index';
import styles from './styles';
export default function ShippingScreen(props) {
  const {setShowAddCard} = props;
  const insets = useSafeAreaInsets();
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
        <View style={styles.contentContainer}>
          <InfoCell
            name={'Jane Doe'}
            actionType={'Edit'}
            address={'3 Newbridge Court Chino Hills, CA 91709, United States'}
            isShowCheck={true}
          />
          <InfoCell
            name={'Jane Doe'}
            actionType={'Edit'}
            address={'3 Newbridge Court Chino Hills, CA 91709, United States'}
            isShowCheck={true}
          />
          <InfoCell
            name={'Jane Doe'}
            actionType={'Edit'}
            address={'3 Newbridge Court Chino Hills, CA 91709, United States'}
            isShowCheck={true}
            isCheck={true}
          />
          <AddButton setShowAddCard={setShowAddCard} bottom={insets.bottom} />
        </View>
      </View>
    </SafeAreaProvider>
  );
}
