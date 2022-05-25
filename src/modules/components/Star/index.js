import PropTypes from 'prop-types';
import React from 'react';
import { Image, View } from 'react-native';
import { AppIcons } from '../../../general/constants/AppResource';
import styles from './styles';
Star.propTypes = {
  starCount: PropTypes.number,
  starType: PropTypes.string,
  justifyContent: PropTypes.string,
  width: PropTypes.number
};
Star.defaultProps = {
  starCount: 0,
  starType: 'small',
  justifyContent: 'flex-start',
  width: 0,
};

function Star(props) {
  const {starCount, starType, justifyContent, width} = props;
  console.log(props);
  return (
    <View style={[styles.starSection, {width: width, justifyContent: justifyContent}]}>
      {Array.from({length: starCount}).map((_, index) => (
        <Image
          source={starType == 'small' ? AppIcons.star : AppIcons.star_large}
          style={starType == 'small' ? styles.star : styles.starLarge}
          key={index}
        />
      ))}
    </View>
  );
}
export default Star;
