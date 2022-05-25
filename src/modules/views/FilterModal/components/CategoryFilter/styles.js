import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../../general/constants/AppStyle';
const styles = StyleSheet.create({
  filterItem: {
    height: 182,
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
  filterContainer: {
    marginTop: 24,
  },
});
export default styles;
