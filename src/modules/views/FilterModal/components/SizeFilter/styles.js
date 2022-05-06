import {StyleSheet} from 'react-native';
import {AppColors} from '../../../../../general/constants/AppStyle';
const styles = StyleSheet.create({
  filterContainer: {
    flex: 1,
    backgroundColor: AppColors.primaryColor,
  },
  filterItem: {
    height: 130,
    paddingHorizontal: 16,
    backgroundColor: '#1E1F28',
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
  sizeContainer: {
    marginTop: 24,
  },
});
export default styles;
