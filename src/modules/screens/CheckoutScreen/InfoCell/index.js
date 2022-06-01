import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CheckBox from '../../../components/CheckBox/index';
import styles from './styles';
InfoCell.propTypes = {
  name: PropTypes.string, 
  address: PropTypes.string,
  action: PropTypes.func,
  actionType: PropTypes.string, 
  isShowCheck: PropTypes.bool,
  isCheck: PropTypes.bool,
};
InfoCell.defaultProps = {
  name: '',
  address: '',
  action: () => {},
  actionType: '',
  isShowCheck: false,
  isCheck: false,
};
export default function InfoCell(props) {
  const {name, address, action, actionType, isShowCheck, isCheck} = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 18,
        }}>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity onPress={action}>
          <Text style={styles.action}>{actionType}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.address}>{address}</Text>
      {isShowCheck ? (
        <CheckBox
          isCheck={isCheck}
          message={'Use as a shipping address'}
          marginLeft={26}
          marginTop={14}
        />
      ) : null}
    </View>
  );
}
