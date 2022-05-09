import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  AppIcons,
  AppImages,
} from '../../../../../general/constants/AppResource';
import styles from './styles';
BagItem.propTypes = {};
BagItem.defaultProps = {};

function BagItem(props) {
  return (
    <TouchableOpacity style={styles.bagItem}>
      <View style={styles.imageSection}>
        <Image source={AppImages.black} style={styles.image} />
      </View>
      <View style={styles.itemSection}>
        <View style={styles.itemName}>
          <Text style={styles.nameText}>Pullover</Text>
        </View>
        <View style={styles.itemDetail}>
          <View>
            <Text style={styles.itemText}>Color: Black</Text>
          </View>
          <View style={{marginLeft: 13}}>
            <Text style={styles.itemText}>Size: L</Text>
          </View>
        </View>
        <View style={styles.quantityChange}>
          <TouchableOpacity style={styles.button}>
            <Image source={AppIcons.remove} />
          </TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.text}>1</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Image source={AppIcons.add} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.moreSection}>
        <TouchableOpacity>
          <Image source={AppIcons.more} />
        </TouchableOpacity>
        <Text style={styles.priceText}>$12</Text>
      </View>
    </TouchableOpacity>
  );
}
export default BagItem;
