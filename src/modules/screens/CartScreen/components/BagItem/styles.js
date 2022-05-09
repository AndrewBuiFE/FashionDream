import {StyleSheet} from 'react-native';
import {AppColors} from '../../../../../general/constants/AppStyle';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  cartContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: AppColors.primaryColor,
  },
  text: {
    color: 'black',
  },
  bagItem: {
    height: 20,
    backgroundColor: 'red',
  },
});
export default styles;
