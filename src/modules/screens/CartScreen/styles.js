import {StyleSheet} from 'react-native';
import {AppColors} from '../../../general/constants/AppStyle';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  cartContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: AppColors.primaryColor,
  },
  bagTitleContainer: {
    height: 34,
    marginTop: 18,
    marginLeft: 16,
  },
  bagTitle: {
    fontFamily: 'Metropolis',
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 34,
    color: '#F7F7F7',
  },
});
export default styles;
