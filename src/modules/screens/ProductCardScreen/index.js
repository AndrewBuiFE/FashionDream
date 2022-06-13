import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { AppIcons } from '../../../general/constants/AppResource';
import AppHeaderNormal from '../../components/AppHeaderNormal/index';
import GlobalButton from '../../components/GlobalButton/index';
import Star from '../../components/Star/index';
import SelectColorModal from '../../views/SelectColorModal';
import SelectSizeModal from '../../views/SelectSizeModal/index';
import CartUtils from '../CartScreen/CartUtils';
import styles from './styles';
ProductCardScreen.propTypes = {};
ProductCardScreen.defaultProps = {};

var cartUtils = new CartUtils();
function ProductCardScreen(props) {
  const document = props.route.params.document;
  const [isShowSizeMenu, setShowSizeMenu] = useState(false);
  const [isShowColorMenu, setShowColorMenu] = useState(false);
  const [productColor, setProductColor] = useState('');
  const [productSize, setProductSize] = useState('');
  const {cartData} = useSelector(state => state.cart);
  console.log(cartData);
  return (
    <SafeAreaProvider>
      <View style={styles.homeContainer}>
        <AppHeaderNormal title={document.name}>
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
        <SelectSizeModal
          isVisible={isShowSizeMenu}
          onModalHidden={() => {
            setShowSizeMenu(false);
          }}
          onAddSize={size => {
            setProductSize(size);
          }}
        />
        <SelectColorModal
          isVisible={isShowColorMenu}
          onModalHidden={() => {
            setShowColorMenu(false);
          }}
          onAddColor={color => {
            setProductColor(color);
          }}
        />
        <View style={styles.imageSection}>
          <Image source={document.image} style={styles.image} />
        </View>
        <View style={styles.selectionSection}>
          <TouchableOpacity
            style={styles.selectionBox}
            onPress={() => {
              setShowSizeMenu(true);
            }}>
            <Text style={styles.boxText}>
              {productSize.length > 0 ? productSize : 'Size'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selectionBox}
            onPress={() => {
              setShowColorMenu(true);
            }}>
            <Text style={styles.boxText}>
              {productColor.length > 0 ? productColor : 'Color'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.likeContainer}>
            <Image source={AppIcons.heart_small} />
          </TouchableOpacity>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemName}>
            <Text style={styles.itemText}>{document.name}</Text>
            <Text style={styles.itemText}>${document.price}</Text>
          </View>
          <View style={styles.brand}>
            <Text style={styles.brandText}>{document.brand}</Text>
          </View>
          <View style={styles.starSection}>
            <Star starCount={document.starCount} />
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText} numberOfLines={2}>
            {document.description}
          </Text>
        </View>
        <GlobalButton
          actionText="ADD TO CART"
          marginTop={20}
          action={() => {
            if (productColor.length < 1 || productSize.length < 1)
              Alert.alert('Failed!', 'Need to choose both size and color');
            else {
              let product = {
                ...document,
                color: productColor,
                size: productSize,
              };
              let isDuplicate = cartUtils.isDuplicateProduct(product, cartData);
              if (!isDuplicate) {
                product.id = Date.now();
                console.log("adding...");
                cartUtils.addCartItem(product, cartData);
              }

              props.navigation.goBack();
            }
          }}
        />
      </View>
    </SafeAreaProvider>
  );
}
export default ProductCardScreen;
