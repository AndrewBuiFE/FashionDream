import React from 'react';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppHeaderNormal from '../../components/AppHeaderNormal';
import styles from './styles';
CategoryScreen.propTypes = {};
CategoryScreen.defaultProps = {};

function CategoryScreen(props) {
  return (
    <SafeAreaProvider>
      <View style={styles.categoryContainer}>
        <AppHeaderNormal title="Categories">
          <></>
          <></>
        </AppHeaderNormal>
      </View>
    </SafeAreaProvider>
  );
}
export default CategoryScreen;
