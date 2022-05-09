import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppIcons} from '../../../general/constants/AppResource';
import AppHeader from '../../components/AppHeader/index';
import GlobalButton from '../../components/GlobalButton/index';
import BagItem from './components/BagItem/index';
import styles from './styles';
CartScreen.propTypes = {};
CartScreen.defaultProps = {};

function CartScreen(props) {
  return (
    <SafeAreaProvider>
      <View style={styles.cartContainer}>
        <AppHeader>
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
        <View style={styles.bagTitleContainer}>
          <Text style={styles.bagTitle}>My Bag</Text>
        </View>
        <BagItem />
        <GlobalButton actionText="CHECK OUT" marginTop={20} />
      </View>
    </SafeAreaProvider>
  );
}
export default CartScreen;
