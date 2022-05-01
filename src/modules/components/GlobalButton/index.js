import PropTypes from 'prop-types';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {AppColors} from '../../../general/constants/AppStyle';
import styles from './styles';
GlobalButton.propTypes = {
  action: PropTypes.string,
  backgroundColor: PropTypes.string,
  marginTop: PropTypes.number,
};
GlobalButton.defaultProps = {
  action: '',
  backgroundColor: AppColors.buttonColor,
  marginTop: 0,
};
function GlobalButton(props) {
  const {action, backgroundColor, marginTop} = props;
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {
          backgroundColor: backgroundColor,
          marginTop: marginTop,
        },
      ]}>
      <Text style={styles.actionTitle}>{action}</Text>
    </TouchableOpacity>
  );
}
export default GlobalButton;
