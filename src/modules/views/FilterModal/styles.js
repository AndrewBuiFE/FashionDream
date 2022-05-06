import {StyleSheet} from 'react-native';
import {AppColors} from '../../../general/constants/AppStyle';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  filterContainer: {
    flex: 1,
    backgroundColor: AppColors.primaryColor,
  },
  divider: {
    // borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    marginHorizontal: 16,
    // opacity: 0.1,
  },
  colorContainer: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
});
export default styles;
