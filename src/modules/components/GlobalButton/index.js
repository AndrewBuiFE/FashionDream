import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { AppColors } from '../../../general/constants/AppStyle';
import { DeviceConstants } from '../../../general/constants/Global';
import styles from './styles';
GlobalButton.propTypes = {
  actionText: PropTypes.string,
  backgroundColor: PropTypes.string,
  marginTop: PropTypes.number,
  width: PropTypes.number,
  action: PropTypes.func,
  height: PropTypes.number,
  marginHorizontal: PropTypes.number,
};
GlobalButton.defaultProps = {
  actionText: '',
  backgroundColor: AppColors.buttonColor,
  marginTop: 0,
  width: DeviceConstants.screenWidth - 16 * 2,
  action: () => {},
  height: 48,
  marginHorizontal: 16,
};
function GlobalButton(props) {
  const {actionText, backgroundColor, marginTop, width, action, height, marginHorizontal} = props;
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {
          backgroundColor: backgroundColor,
          marginTop: marginTop,
          width: width,
          height: height,
          marginHorizontal: marginHorizontal,
        },
      ]}
      onPress={action}>
      <Text style={styles.actionTitle}>{actionText}</Text>
    </TouchableOpacity>
  );
}
export default GlobalButton;
