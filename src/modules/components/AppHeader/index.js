import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';
import { AppColors } from '../../../general/constants/AppStyle';
import styles from './styles';
AppHeader.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
};
AppHeader.defaultProps = {
  title: '',
  backgroundColor: AppColors.primaryColor,
};
function AppHeader(props) {
  const {title, backgroundColor} = props;
  return (
    <View
      style={[
        styles.containerView,
        {
          backgroundColor: backgroundColor,
        },
      ]}>
      <View style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
        <View style={styles.viewLeftAction}>{props.children[0]}</View>
        <View style={styles.viewRightAction}>{props.children[1]}</View>
        <View style={styles.appHeaderTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
      </View>
    </View>
  );
}
export default AppHeader;
