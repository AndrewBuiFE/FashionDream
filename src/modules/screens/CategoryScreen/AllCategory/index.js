import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CATEGORY } from '../../../../data/index';
import { AppIcons } from '../../../../general/constants/AppResource';
import { ScreenNames } from '../../../../general/constants/ScreenNames';
import AppHeaderNormal from '../../../components/AppHeaderNormal';
import GlobalButton from '../../../components/GlobalButton/index';
import styles from './styles';
AllCategory.propTypes = {};
AllCategory.defaultProps = {};
const CategoryItem = ({item, navigation}) => (
  <TouchableOpacity
    style={styles.categoryItem}
    onPress={() => {
      navigation.navigate(ScreenNames.catalogScreen, {item: item});
    }}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);
const Divider = () => <View style={styles.divider}></View>;
function AllCategory(props) {
  const renderItem = ({item}) => (
    <CategoryItem item={item} navigation={props.navigation} />
  );
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
        <GlobalButton actionText='VIEW ALL ITEMS' marginTop={16} />
        <Text style={styles.text}>Choose category</Text>
        <FlatList
          data={CATEGORY}
          renderItem={renderItem}
          ItemSeparatorComponent={Divider}
          style={{marginTop: 15}}
        />
      </View>
    </SafeAreaProvider>
  );
}
export default AllCategory;
