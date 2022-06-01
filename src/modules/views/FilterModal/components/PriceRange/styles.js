import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../../general/constants/AppStyle';
const styles = StyleSheet.create({
  filterItem: {
    height: 130,
    paddingHorizontal: 16,
    backgroundColor: AppColors.primaryColor,
  },
  titleContainer: {
    height: 42,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    color: '#F7F7F7',
  },
  priceNumber: {
    height: 20,
    marginTop: 24,
  },
  number: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#F7F7F7',
  },
});
export default styles;
