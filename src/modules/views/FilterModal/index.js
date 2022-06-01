import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppIcons } from '../../../general/constants/AppResource';
import { ScreenNames } from '../../../general/constants/ScreenNames';
import AppHeaderNormal from '../../components/AppHeaderNormal';
import GlobalButton from '../../components/GlobalButton/index';
import ProfileCell from '../../screens/ProfileScreen/ProfileCell/index';
import CategoryFilter from './components/CategoryFilter/index';
import ColorFilter from './components/ColorFilter/index';
import PriceRange from './components/PriceRange/index';
import SizeFilter from './components/SizeFilter/index';
import styles from './styles';
FilterModal.propTypes = {
  id: PropTypes.number,
};
FilterModal.defaultProps = {};
let menuIndex = -1;
const DividerView = () => <View style={styles.divider}></View>;

export default function FilterModal(props) {
  const {isVisible, onModalHidden, onMenuClick} = props;
  const [sliderValue, setSliderValue] = useState(0);
  const insets = useSafeAreaInsets();
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
      hasBackdrop={true}
      avoidKeyboard={true}
      onSwipeComplete={() => {
        if (onModalHidden) {
          onModalHidden();
        }
      }}
      swipeDirection="down"
      coverScreen={true}
      style={{margin: 0}}>
      <View style={[styles.filterContainer, {bottom: insets.bottom}]}>
        <AppHeaderNormal title="Filters">
          <>
            <TouchableOpacity
              onPress={() => {
                onModalHidden();
              }}>
              <Image source={AppIcons.left_arrow} />
            </TouchableOpacity>
          </>
          <></>
        </AppHeaderNormal>
        <PriceRange sliderValue={sliderValue} setSliderValue={setSliderValue} />
        <DividerView />
        <ColorFilter />
        <DividerView />
        <SizeFilter />
        <DividerView />
        <CategoryFilter />
        <ProfileCell title='Brand' suggestion='adidas Originals, Jack & Jones, s.Oliver' screenName={ScreenNames.brandScreen}/>
        <View style = {styles.button}>
          <GlobalButton
            actionText="Discard"
            backgroundColor="red"
            width={160}
            action={() => {
              onModalHidden();
            }}
          />
          <GlobalButton
            actionText="Apply"
            backgroundColor="red"
            width={160}
            action={() => {
              onModalHidden();
            }}
          />
        </View>
      </View>
    </ReactNativeModal>
  );
}
