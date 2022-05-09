import {StyleSheet} from 'react-native';
import {AppColors} from '../../../../general/constants/AppStyle';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  cardContainer: {
    height: 216,
    backgroundColor: AppColors.cellColor,
    borderRadius: 8,
    paddingHorizontal: 24,
  },
  number: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 24,
    color: '#F7F7F7',
    marginTop: 29,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 43,
  },
  section: {
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 22,
    color: '#FFFFFF',
    letterSpacing: -0.41,
    opacity: 0.8,
  },
  text: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: '#FFFFFF',
    letterSpacing: -0.41,
  },
});
export default styles;
