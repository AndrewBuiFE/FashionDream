import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppIcons, AppImages} from '../../../general/constants/AppResource';
import {ScreenNames} from '../../../general/constants/ScreenNames';
import AppHeaderNormal from '../../components/AppHeaderNormal';
import styles from './styles';
CategoryScreen.propTypes = {};
CategoryScreen.defaultProps = {};

function CategoryScreen(props) {
  return (
    <SafeAreaProvider>
      <View style={styles.categoryContainer}>
        <AppHeaderNormal title="Categories">
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
        <View style={styles.listCategoryContainer}>
          <View style={styles.categoryNameContainer}>
            <Text style={styles.categoryName}>Women</Text>
          </View>
          <View style={styles.categoryNameContainer}>
            <Text style={styles.categoryName}>Men</Text>
          </View>
          <View style={styles.categoryNameContainer}>
            <Text style={styles.categoryName}>Kids</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.promotionContainer}
          onPress={() => {
            props.navigation.navigate(ScreenNames.allCategory);
          }}>
          <Text style={styles.promoTitle}>SUMMER SALES</Text>
          <Text style={styles.promoDetail}>Up to 50% off</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categorySection}>
          <View style={styles.categoryTextSection}>
            <Text style={styles.categoryTitle}>New</Text>
          </View>
          <View style={styles.categoryImage}>
            <Image
              source={AppImages.black}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categorySection}>
          <View style={styles.categoryTextSection}>
            <Text style={styles.categoryTitle}>Clothes</Text>
          </View>
          <View style={styles.categoryImage}>
            <Image
              source={AppImages.black}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categorySection}>
          <View style={styles.categoryTextSection}>
            <Text style={styles.categoryTitle}>Shoes</Text>
          </View>
          <View style={styles.categoryImage}>
            <Image
              source={AppImages.black}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categorySection}>
          <View style={styles.categoryTextSection}>
            <Text style={styles.categoryTitle}>Accessories</Text>
          </View>
          <View style={styles.categoryImage}>
            <Image
              source={AppImages.black}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
export default CategoryScreen;
