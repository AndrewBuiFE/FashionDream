import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {AppIcons} from '../../../../../general/constants/AppResource';
import styles from './styles';
Reviewing.propTypes = {
  starCount: PropTypes.number,
};
Reviewing.defaultProps = {
  starCount: 0,
};

function Reviewing(props) {
  const {starCount} = props;
  return (
    <View style={styles.starSection}>
      <Image source={AppIcons.star} style={styles.star} />
      <Image source={AppIcons.star} style={styles.star} />
      <Image source={AppIcons.star} style={styles.star} />
      <Image source={AppIcons.star} style={styles.star} />
      <Image source={AppIcons.star} style={styles.star} />
      <View
        style={{
          marginLeft: 2,
          width: 18,
          height: 8,
          position: 'absolute',
          left: 70,
          top: 3,
        }}>
        <Text style={styles.text}>({starCount})</Text>
      </View>
    </View>
  );
}
export default Reviewing;
