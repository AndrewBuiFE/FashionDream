import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppIcons} from '../../../general/constants/AppResource';
import GlobalButton from '../../components/GlobalButton/index';
import CategoryCell from '../FilterModal/components/CategoryCell/index';
import styles from './styles';
SelectSizeModal.propTypes = {
  id: PropTypes.number,
};
SelectSizeModal.defaultProps = {};
let menuIndex = -1;
let SIZES = [
  {
    id: 1,
    title: 'XS',
  },
  {
    id: 2,
    title: 'S',
  },
  {
    id: 3,
    title: 'M',
  },
  {
    id: 4,
    title: 'L',
  },
  {
    id: 5,
    title: 'XL',
  },
];
export default function SelectSizeModal(props) {
  const {isVisible, onModalHidden, onMenuClick} = props;
  const insets = useSafeAreaInsets();
  const [sizeData, setSizeData] = useState(SIZES);
  const [sizeOnFocus, setSizeFocus] = useState('');
  const renderItem = ({item}) => {
    return (
      <CategoryCell
        item={item}
        sizeOnFocus={sizeOnFocus}
        setSizeFocus={setSizeFocus}
        sizeData={sizeData}
        setSizeData={setSizeData}
      />
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
      style={{margin: 0, bottom: insets.bottom, position: 'absolute'}}>
      <View style={[styles.sizeContainer, {bottom: insets.bottom}]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Select size</Text>
        </View>
        <FlatList
          data={sizeData}
          renderItem={renderItem}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginHorizontal: 26,
            height: 96,
            marginTop: 22,
            justifyContent: 'space-between',
          }}
          numColumns={3}
          columnWrapperStyle={{}}
        />
        <View style={[styles.divider, {marginTop: 24}]}></View>
        <View style={styles.sizeInfo}>
          <Text style={styles.sizeInfoText}>Size info</Text>
          <Image source={AppIcons.arrow_right} />
        </View>
        <View style={styles.divider}></View>
        <GlobalButton actionText="ADD TO CART" marginTop={28} />
      </View>
    </ReactNativeModal>
  );
}
