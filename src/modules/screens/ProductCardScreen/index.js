import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppIcons} from '../../../general/constants/AppResource';
import AppHeaderNormal from '../../components/AppHeaderNormal/index';
import GlobalButton from '../../components/GlobalButton/index';
import SelectSizeModal from '../../views/SelectSizeModal/index';
import Reviewing from '../HomeScreen/components/Reviewing/index';
import styles from './styles';
ProductCardScreen.propTypes = {};
ProductCardScreen.defaultProps = {};

function ProductCardScreen(props) {
  const {document} = props.route.params;
  console.log(document);
  const [isShowSizeMenu, setShowSizeMenu] = useState(false);
  return (
    <SafeAreaProvider>
      <View style={styles.homeContainer}>
        <AppHeaderNormal title={document.productName}>
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
        {/* <FlatList data={document} renderItem={renderItem} /> */}
        <SelectSizeModal
          isVisible={isShowSizeMenu}
          onModalHidden={() => {
            setShowSizeMenu(false);
          }}
          onMenuClick={menu => {
            switch (menu) {
              case 0:
                console.log('0');
                break;
              case 1:
                console.log('1');
                break;
              case 2:
                console.log('2');
                break;
              case 3:
                console.log('3');
                break;
              case 4:
                console.log('4');
                break;
              default:
                console.log('-1');
                break;
            }
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
            <Text style={styles.boxText}>Size</Text>
          </TouchableOpacity>
          <View style={styles.selectionBox}>
            <Text style={styles.boxText}>Black</Text>
          </View>
          <TouchableOpacity style={styles.likeContainer}>
            <Image source={AppIcons.heart_small} />
          </TouchableOpacity>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemName}>
            <Text style={styles.itemText}>{document.productName}</Text>
            <Text style={styles.itemText}>${document.price}</Text>
          </View>
          <View style={styles.brand}>
            <Text style={styles.brandText}>{document.brandName}</Text>
          </View>
          <View style={styles.starSection}>
            <Reviewing starCount={document.starCount} />
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText} numberOfLines={2}>
            {document.description}
          </Text>
        </View>
        <GlobalButton actionText="ADD TO CART" marginTop={20} />
      </View>
    </SafeAreaProvider>
  );
}
export default ProductCardScreen;
