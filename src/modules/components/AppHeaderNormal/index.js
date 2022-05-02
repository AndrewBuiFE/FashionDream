import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import {AppColors} from '../../../general/constants/AppStyle';
import {default as styles} from './styles';

AppHeaderNormal.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
};

AppHeaderNormal.defaultProps = {
  title: '',
  backgroundColor: AppColors.primaryColor,
};

function AppHeaderNormal(props) {
  const {title, backgroundColor} = props;

  return (
    <View
      style={[
        styles.containerView,
        {
          backgroundColor: backgroundColor,
        },
      ]}>
      <View style={styles.viewLeftAction}>{props.children[0]}</View>
      <Text
        style={[
          styles.textTitle,
          {
            width: '66%',
          },
        ]}
        numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.viewRightAction}>{props.children[1]}</View>
    </View>
  );
}

export default AppHeaderNormal;
