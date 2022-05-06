import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppIcons} from '../../../general/constants/AppResource';
import AppHeader from '../../components/AppHeader';
import FilterModal from '../../views/FilterModal';
import SortModal from '../../views/SortModal';
import HorizonProduct from './components/HorizonProduct';
import styles from './styles';
CatalogScreen.propTypes = {
  category: PropTypes.string,
};
CatalogScreen.defaultProps = {
  category: '',
};
const DATA = [
  {id: 1, title: 'Dress', brand: 'Perkins', price: 51},
  {id: 2, title: 'Pullover', brand: 'Mango', price: 38},
  {id: 3, title: 'Blouse', brand: 'Perkins', price: 150},
  {id: 4, title: 'T-shirt', brand: 'LOST Ink', price: 10},
  {id: 5, title: 'Shirt', brand: 'Topshop', price: 15},
];
function CatalogScreen(props) {
  // const {category} = props.route.params;
  const category = 'Tops';

  const [isShowSortMenu, setShowSortMenu] = useState(false);
  const [isShowFilterMenu, setShowFilterMenu] = useState(false);
  const renderItem = ({item}) => (
    <HorizonProduct
      brandName={item.brand}
      price={item.price}
      productName={item.title}
    />
  );
  return (
    <SafeAreaProvider>
      <View style={styles.catalogContainer}>
        <AppHeader>
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
        </AppHeader>
        <SortModal
          isVisible={isShowSortMenu}
          onModalHidden={() => {
            setShowSortMenu(false);
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
        <FilterModal
          isVisible={isShowFilterMenu}
          onModalHidden={() => {
            setShowFilterMenu(false);
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
        <View style={styles.categoryTitle}>
          <Text style={styles.categoryText}>{category}</Text>
        </View>
        <View style={styles.clothesTypes}>
          <TouchableOpacity style={[styles.typeContainer, {marginLeft: 16}]}>
            <Text style={styles.typeText}>T-shirts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.typeContainer}>
            <Text style={styles.typeText}>Crop tops</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.typeContainer}>
            <Text style={styles.typeText}>Sleeveless</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.typeContainer}>
            <Text style={styles.typeText}>Sleeve</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productAction}>
          <TouchableOpacity
            style={styles.filter}
            onPress={() => {
              console.log('filter');
              setShowFilterMenu(true);
            }}>
            <Image source={AppIcons.filter} style={{marginRight: 11}} />
            <Text style={styles.text}>Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sort}
            onPress={() => {
              console.log('sort');
              setShowSortMenu(true);
            }}>
            <Image source={AppIcons.sorting_arrow} style={{marginRight: 11}} />
            <Text style={styles.text}>Price: lowest to high</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.layout}>
            <Image source={AppIcons.layout} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaProvider>
  );
}
export default CatalogScreen;
