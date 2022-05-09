import PropTypes from 'prop-types';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppImages} from '../../../general/constants/AppResource';
import {AppColors} from '../../../general/constants/AppStyle';
import PromoCell from '../../screens/CartScreen/components/PromoCell/index';
import PromoCode from '../../screens/CartScreen/components/PromoCode/index';
import styles from './styles';
PromoCodeModal.propTypes = {
  id: PropTypes.number,
};
PromoCodeModal.defaultProps = {};
const PROMO = [
  {
    id: 1,
    promoTitle: 'Personal offer',
    promoCode: 'mypromocode2020',
    expDay: 6,
    image: AppImages.black,
  },
  {
    id: 2,
    promoTitle: 'Summer sale',
    promoCode: 'summer2020',
    expDay: 23,
    image: AppImages.black,
  },
  {
    id: 3,
    promoTitle: 'Personal offer',
    promoCode: 'mypromocode2020',
    expDay: 6,
    image: AppImages.black,
  },
];
let menuIndex = -1;
const Divider = () => (
  <View style={{height: 24, backgroundColor: AppColors.primaryColor}}></View>
);
export default function PromoCodeModal(props) {
  const {isVisible, onModalHidden, onMenuClick, getPromoCode} = props;
  const insets = useSafeAreaInsets();
  const renderItem = ({item}) => {
    return (
      <View>
        <PromoCell
          item={item}
          getPromoCode={getPromoCode}
          onModalHidden={onModalHidden}
        />
      </View>
    );
  };
  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackdropPress={() => {
        if (onModalHidden) onModalHidden();
      }}
      onModalHide={() => {
        console.log('On modal hide');
        if (menuIndex != -1 && onMenuClick) {
          onMenuClick(menuIndex);
        }
        menuIndex = -1;
      }}
      coverScreen={true}
      style={{margin: 0}}>
      <View style={[styles.promoContainer, {bottom: insets.bottom}]}>
        <PromoCode marginTop={52} />
        <View style={styles.titleSection}>
          <Text style={styles.titleText}>Your Promo Codes</Text>
        </View>
        <View style={{marginTop: 18}}>
          <FlatList
            data={PROMO}
            renderItem={renderItem}
            ItemSeparatorComponent={Divider}
          />
        </View>
      </View>
    </ReactNativeModal>
  );
}
