import PropTypes from 'prop-types';
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppIcons} from '../../../general/constants/AppResource';
import AppHeader from '../../components/AppHeader';
import HorizonProduct from './components/HorizonProduct';
import styles from './styles';
CatalogScreen.propTypes = {
  category: PropTypes.string,
};
CatalogScreen.defaultProps = {
  category: '',
};
const DATA = [
  {id: 1, title: 'Dress', brand: 'Perkins', price: 16},
  {id: 2, title: 'Dress', brand: 'Perkins', price: 15},
  {id: 3, title: 'Dress', brand: 'Perkins', price: 15},
  {id: 4, title: 'Dress', brand: 'Perkins', price: 15},
  {id: 5, title: 'Dress', brand: 'Perkins', price: 15},
];
function CatalogScreen(props) {
  const {category} = props.route.params;
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
          <TouchableOpacity style={styles.filter}>
            <Image source={AppIcons.filter} style={{marginRight: 11}} />
            <Text style={styles.text}>Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sort}>
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
