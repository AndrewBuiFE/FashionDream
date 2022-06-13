import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
    AppIcons
} from '../../../../../general/constants/AppResource';
import { ScreenNames } from '../../../../../general/constants/ScreenNames';
import Star from '../../../../components/Star/index';
import styles from './styles';
HorizonProduct.propTypes = {
  item: PropTypes.object,
};
HorizonProduct.defaultProps = {
  item: null,
};

function HorizonProduct(props) {
  const {item} = props;
  const navigation = useNavigation();
  const [likeStatus, setLikeStatus] = useState(false);
  return (
    <TouchableOpacity style={styles.productContainer} onPress={
      () => {
        navigation.navigate(ScreenNames.productCardScreen, {document: item})
      }
    }>
      <View style={styles.imageSection}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.product}>{item.name}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <View style= {styles.starSection}>
        <Star starCount={item.starCount} starType='small' width={item.starCount*14}/>
        <Text>({item.noComment})</Text>
        </View>
        <View style={styles.priceSection}>
          <Text style={styles.price}>{item.price}$</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.likeContainer}
        onPress={() => {
          setLikeStatus(!likeStatus);
        }}>
        {likeStatus ? (
          <Image source={AppIcons.heart_small_active} />
        ) : (
          <Image source={AppIcons.heart_small} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
export default HorizonProduct;
