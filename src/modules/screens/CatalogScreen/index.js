import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppIcons } from '../../../general/constants/AppResource';
import AppHeader from '../../components/AppHeader/index';
import FilterModal from '../../views/FilterModal';
import SortModal from '../../views/SortModal';
import ProductCell from '../HomeScreen/components/ProductCell/index';
import HorizonProduct from './components/HorizonProduct';
import styles from './styles';
CatalogScreen.propTypes = {
  item: PropTypes.object,
};
CatalogScreen.defaultProps = {
  item: null,
};
const Divider = () => <View style={{height: 20}}></View>;
function CatalogScreen(props) {
  const {item} = props.route.params;
  const [isShowSortMenu, setShowSortMenu] = useState(false);
  const [isShowFilterMenu, setShowFilterMenu] = useState(false);
  const [isGridLayout, setGridLayout] = useState(false);
  const renderItem = ({item}) => (
    <HorizonProduct
      item = {item}
    />
  );
  const renderGridItem = ({item}) => <ProductCell item={item} width={164} />;
  return (
    <SafeAreaProvider>
      <View style={styles.catalogContainer}>
        <AppHeader title={item.title}>
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
          <TouchableOpacity
            style={styles.layout}
            onPress={() => {
              setGridLayout(!isGridLayout);
            }}>
            <Image
              source={isGridLayout ? AppIcons.grid_layout : AppIcons.layout}
            />
          </TouchableOpacity>
        </View>
        {isGridLayout ? (
          <FlatList
            key={'_'}
            keyExtractor={item => '_' + item.id}
            data={item.listProduct}
            renderItem={renderGridItem}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            style={{marginTop: 26, marginLeft: 5}}
            ItemSeparatorComponent={Divider}
            contentContainerStyle={{}}
          />
        ) : (
          <FlatList
            key={'#'}
            keyExtractor={item => '#' + item.id}
            data={item.listProduct}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaProvider>
  );
}
export default CatalogScreen;
