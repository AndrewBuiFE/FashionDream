import React from 'react';
import {
  FlatList,
  Image,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppImages} from '../../../general/constants/AppResource';
import AppHeader from '../../components/AppHeader';
import ProductCell from './components/ProductCell';
import styles from './styles';
HomeScreen.propTypes = {};
HomeScreen.defaultProps = {};
const DATA = [
  {
    title: 'Sale',
    horizontal: true,
    description: 'Super summer sale',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'New',
    horizontal: true,
    description: 'You’ve never seen it before!',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
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
const renderHeader = () => {
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
            <View style={styles.summerSale}>
              <Text
                style={[
                  styles.themeTitle,
                  {color: '#EF3651', top: 59, left: 15},
                ]}>
                Summer sale
              </Text>
            </View>
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
          renderItem={({item}) => <ProductCell item={item} />}
          showsHorizontalScrollIndicator={false}
        />
      ) : null}
    </View>
  );
};
function HomeScreen(props) {
  return (
    <SafeAreaProvider>
      <View style={styles.homeContainer}>
        <AppHeader title="Home">
          <></>
        </AppHeader>
        <SectionList
          // contentContainerStyle={{paddingHorizontal: 10}}
          stickySectionHeadersEnabled={false}
          sections={DATA}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={renderSectionHeader}
          ListHeaderComponent={renderHeader}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaProvider>
  );
}
export default HomeScreen;
