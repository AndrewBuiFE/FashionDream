import {StyleSheet} from 'react-native';
import {AppColors} from '../../../general/constants/AppStyle';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  successContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.primaryColor,
  },
  successTitle: {
    marginTop: 49,
  },
  title: {
    fontFamily: 'Metropolis',
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 34,
    color: '#F7F7F7',
  },
  indicator: {
    marginTop: 12,
    width: 225,
    height: 42,
  },
  text: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#F5F5F5',
  },
});
export default styles;
