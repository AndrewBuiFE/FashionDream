import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../general/constants/AppStyle';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  reviewCell: {
    backgroundColor: AppColors.cellColor,
    borderRadius: 8,
    paddingLeft: 24,
    paddingRight: 20,
  },
  name: {
    fontFamily: 'Metropolis',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 14,
    color: '#F7F7F7',
    marginTop: 23,
  },
  secondRow: {
    marginTop: 9,
    height: 14,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 14,
    color: '#ABB4BD',
  },
  paragraph: {
    marginTop: 11,
  },
  paraText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#F5F5F5',
    opacity: 0.9,
    letterSpacing: -0.15
  },
  helpful: {
    marginTop: 3, 
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: 24,
    marginBottom: 16,
  },
 
});
export default styles;
