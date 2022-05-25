import PropTypes from 'prop-types';
import React from 'react';
import { Image, View } from 'react-native';
import { AppIcons } from '../../../../../general/constants/AppResource';
import styles from './styles';
Star.propTypes = {
  starCount: PropTypes.number,
};
Star.defaultProps = {
  starCount: 0,
};

function Star(props) {
  const {starCount} = props;
  return (
    <View style={styles.starSection}>
      {
         Array.from({length: starCount})
         .map((_, index) => (
          <Image source={AppIcons.star} style={styles.star} key={index}/>
         )
     )
      }
    </View>
  );
}
export default Star;
