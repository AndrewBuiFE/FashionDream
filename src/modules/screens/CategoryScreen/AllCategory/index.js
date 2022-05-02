import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppIcons} from '../../../../general/constants/AppResource';
import AppHeaderNormal from '../../../components/AppHeaderNormal';
import GlobalButton from '../../../components/GlobalButton';
import styles from './styles';
AllCategory.propTypes = {};
AllCategory.defaultProps = {};
const DATA = [
  {id: 1, title: 'Tops'},
  {id: 2, title: 'Shirts & Blouses'},
  {id: 3, title: 'Cardigans & Sweaters'},
  {id: 4, title: 'Knitwear'},
  {id: 5, title: 'Blazers'},
  {id: 6, title: 'Outerwear'},
  {id: 7, title: 'Pants'},
  {id: 8, title: 'Jeans'},
  {id: 9, title: 'Shorts'},
  {id: 10, title: 'Skirts'},
  {id: 11, title: 'Dresses'},
];
const CategoryItem = ({item}) => (
  <TouchableOpacity style={styles.categoryItem}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);
const Divider = () => <View style={styles.divider}></View>;
function AllCategory(props) {
  const renderItem = ({item}) => <CategoryItem item={item} />;
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
        <GlobalButton action="VIEW ALL ITEMS" marginTop={16} />
        <Text style={styles.text}>Choose category</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          ItemSeparatorComponent={Divider}
          style={{marginTop: 15}}
        />
      </View>
    </SafeAreaProvider>
  );
}
export default AllCategory;
