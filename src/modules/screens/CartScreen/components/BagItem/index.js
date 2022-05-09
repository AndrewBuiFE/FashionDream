import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AppIcons, AppImages } from '../../../../../general/constants/AppResource';
import styles from './styles';
BagItem.propTypes = {};
BagItem.defaultProps = {};

function BagItem(props) {
  return (
    <TouchableOpacity style={styles.bagItem}>
      <View>
        <Image source={AppImages.black} />
      </View>
      <View>
        <View>
          <Text>Pullover</Text>
        </View>
        <View>
          <View>
            <Text>Color: Black</Text>
          </View>
          <View>
            <Text>Size: L</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Image source={AppIcons.}/>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Image />
        </TouchableOpacity>
        <Text></Text>
      </View>
    </TouchableOpacity>
  );
}
export default BagItem;
