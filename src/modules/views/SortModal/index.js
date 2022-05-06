import PropTypes from 'prop-types';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
SortModal.propTypes = {
  id: PropTypes.number,
};
SortModal.defaultProps = {};
let menuIndex = -1;
const DividerView = () => <View style={styles.divider}></View>;
export default function SortModal(props) {
  const {isVisible, onModalHidden, onMenuClick} = props;
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
      coverScreen={true}
      style={{margin: 0}}>
      <View style={[styles.sortContainer, {bottom: insets.bottom}]}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Sort by</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (onModalHidden) {
              menuIndex = 0;
              onModalHidden();
            }
          }}
          style={styles.sortItem}>
          <Text style={styles.itemText}>Popular</Text>
        </TouchableOpacity>
        <DividerView />
        <TouchableOpacity
          onPress={() => {
            if (onModalHidden) {
              menuIndex = 1;
              onModalHidden();
            }
          }}
          style={styles.sortItem}>
          <Text style={styles.itemText}>Newest</Text>
        </TouchableOpacity>
        <DividerView />
        <TouchableOpacity
          onPress={() => {
            if (onModalHidden) {
              menuIndex = 2;
              onModalHidden();
            }
          }}
          style={styles.sortItem}>
          <Text style={styles.itemText}>Customer review</Text>
        </TouchableOpacity>
        <DividerView />
        <TouchableOpacity
          onPress={() => {
            if (onModalHidden) {
              menuIndex = 3;
              onModalHidden();
            }
          }}
          style={styles.sortItem}>
          <Text style={styles.itemText}>Price: lowest to high</Text>
        </TouchableOpacity>
        <DividerView />
        <TouchableOpacity
          onPress={() => {
            if (onModalHidden) {
              menuIndex = 4;
              onModalHidden();
            }
          }}
          style={styles.sortItem}>
          <Text style={styles.itemText}>Price: highest to low</Text>
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
  );
}
