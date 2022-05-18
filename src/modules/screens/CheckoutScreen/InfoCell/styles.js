import {StyleSheet} from 'react-native';
import {AppColors} from '../../../../general/constants/AppStyle';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.cellColor,
    borderRadius: 8,
    marginTop: 21,
    paddingBottom: 18,
  },
  name: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#F7F7F7',
    marginLeft: 28,
  },
  action: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#EF3651',
    marginRight: 23,
  },
  address: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#F7F7F7',
    marginLeft: 28,
    letterSpacing: -0.15,
    width: 235,
    marginTop: 7,
  },
});
export default styles;
