import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';
import { ScreenNames } from '../../../../general/constants/ScreenNames';
import GlobalButton from '../../../components/GlobalButton/index';
import styles from './styles';

OrderCell.propTypes = {
  item: PropTypes.object,
};
OrderCell.defaultProps = {
  item: [],
};

function OrderCell(props) {
  const {item} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.orderCellContainer}>
      <View style={styles.firstRow}>
        <Text style={styles.text}>{item.orderNo}</Text>
        <Text style={styles.title}>{item.date}</Text>
      </View>
      <View style={styles.secondRow}>
        <Text style={styles.title}>Tracking number: </Text>
        <Text style={styles.text}>{item.trackingNo}</Text>
      </View>
      <View style={styles.thirdRow}>
        <View style={styles.quantity}>
          <Text style={styles.title}>Quantity: </Text>
          <Text style={styles.text}>{item.quantity}</Text>
        </View>
        <View style={styles.totalAmount}>
          <Text style={styles.title}>Total Amount: </Text>
          <Text style={styles.text}>{item.totalAmount}$</Text>
        </View>
      </View>
      <View style = {styles.fourthRow}>
        <GlobalButton width={98} actionText="Details"  height={36} marginHorizontal={0} action={
          () => {
            navigation.navigate(ScreenNames.orderDetailScreen, {order:item})
          }
        }/>
        <Text style = {styles.status}>{item.status}</Text>
      </View>
    </View>
  );
}
export default OrderCell;
