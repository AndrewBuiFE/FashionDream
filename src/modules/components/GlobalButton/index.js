import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';
import { AppColors } from '../../../general/constants/AppStyle';
import styles from './styles';
GlobalButton.propTypes = {
    action: PropTypes.string,
    backgroundColor: PropTypes.string,
}
GlobalButton.defaultProps = {
    action: '',
    backgroundColor: AppColors.buttonColor,
}
function GlobalButton(props) {
    const{ action, backgroundColor } = props;
    return (
        <View
        style={[
          styles.buttonContainer,
          {
            backgroundColor: backgroundColor,
          },
        ]}>
        <Text style = {styles.actionTitle}>{action}</Text>   
      </View>
    )
}
export default GlobalButton;