import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppIcons } from '../../../general/constants/AppResource';
import AppHeader from '../../components/AppHeader/index';
import styles from './styles';
BrandScreen.propTypes = {};
BrandScreen.defaultProps = {};
let promoCodeValue = '';
function BrandScreen(props) {
  const [isShowPromoModal, setShowPromoModal] = useState(false);
  const [isShowSuccess, setShowSuccess] = useState(false);
  return (
    <SafeAreaProvider>
      <View style={styles.cartContainer}>
        <AppHeader title='My Bag'>
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
     
      </View>
    </SafeAreaProvider>
  );
}
export default BrandScreen;
