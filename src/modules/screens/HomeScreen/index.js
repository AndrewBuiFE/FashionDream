import React from 'react';
import {
  FlatList,
  Image,
  SectionList,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppImages } from '../../../general/constants/AppResource';
import { ScreenNames } from '../../../general/constants/ScreenNames';
import ProductCell from './components/ProductCell';
import styles from './styles';
HomeScreen.propTypes = {};
HomeScreen.defaultProps = {};
const DATA = [
  {
    title: 'Sale',
    horizontal: true,
    description: 'Super summer sale',
    data: [
      {
        starCount: 3,
        brandName: 'Dorothy Perkins',
        productName: 'Evening Dress',
        price: 20,
        discountPrice: 12,
        image: AppImages.black,
        description: 'dfkjdfkjdf',
      },
      {
        starCount: 4,
        brandName: 'Perkins',
        productName: 'SDF',
        price: 15,
        discountPrice: 12,
        image: AppImages.men_hat,
        description: 'dfkjdfkjdf',
      },
      {
        starCount: 5,
        brandName: 'Dorothy',
        productName: 'A',
        price: 21,
        discountPrice: 12,
        image: AppImages.small_banner,
        description: 'dfkjdfkjdf',
      },
    ],
  },
  {
    title: 'New',
    horizontal: true,
    description: 'You’ve never seen it before!',
    data: [
      {
        starCount: 1,
        brandName: 'Dorothy Perkins',
        productName: 'Evening Dress',
        price: 20,
        discountPrice: 12,
        image: AppImages.main,
        description: 'dfkjdfkjdf',
      },
      {
        starCount: 3,
        brandName: 'Perkins',
        productName: 'SDF',
        price: 15,
        discountPrice: 12,
        image: AppImages.big_banner,
        description: 'dfkjdfkjdf',
      },
      {
        starCount: 2,
        brandName: 'Dorothy',
        productName: 'A',
        price: 21,
        discountPrice: 12,
        image: AppImages.black,
        description: 'dfkjdfkjdf',
      },
    ],
  },
];
const renderItem = ({item, section}) => {
  if (section.horizontal) {
    return null;
  }
  return (
    <View>
      <ProductCell />
    </View>
  );
};
const renderHeader = props => {
  return (
    <View>
      <View style={styles.theme}>
        <View style={styles.collection}>
          <Image source={AppImages.main} style={{width: '100%'}} />
          <Text
            style={[
              styles.themeTitle,
              {color: '#F7F7F7', top: 305, left: 110},
            ]}>
            New collection
          </Text>
        </View>
        <View style={styles.otherTheme}>
          <View style={styles.leftTheme}>
            <TouchableOpacity
              style={styles.summerSale}
              onPress={() => {
                props.navigation.navigate(ScreenNames.shopTab);
              }}>
              <Text
                style={[
                  styles.themeTitle,
                  {color: '#EF3651', top: 59, left: 15},
                ]}>
                Summer sale
              </Text>
            </TouchableOpacity>
            <View style={styles.blackTheme}>
              <Image source={AppImages.black} style={{width: '100%'}} />
              <Text
                style={[
                  styles.themeTitle,
                  {color: '#F7F7F7', top: 116, left: 13},
                ]}>
                Black
              </Text>
            </View>
          </View>
          <View style={styles.rightTheme}>
            <Image source={AppImages.men_hat} style={{width: '100%'}} />
          </View>
        </View>
      </View>
      <View>
        <Image source={AppImages.big_banner} style={{width: '100%'}} />
        <Text style={styles.bannerText} numberOfLines={2}>
          Fashion Sale
        </Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Check</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={AppImages.small_banner} style={{width: '100%'}} />
      </View>
    </View>
  );
};
const renderSectionHeader = ({section}) => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <Text style={styles.text}>View all</Text>
        </View>
        <Text style={styles.description}>{section.description}</Text>
      </View>
      {section.horizontal ? (
        <FlatList
          horizontal
          data={section.data}
          renderItem={({item}) => (
            <ProductCell
              item={item}
              onItemClick={() => {
                console.log('click');
              }}
            />
          )}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10}}
        />
      ) : null}
    </View>
  );
};
function HomeScreen(props) {
  const Header = renderHeader(props);
  return (
    <SafeAreaProvider>
      <View style={styles.homeContainer}>
        <SectionList
          stickySectionHeadersEnabled={false}
          sections={DATA}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={renderSectionHeader}
          ListHeaderComponent={Header}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaProvider>
  );
}
export default HomeScreen;
