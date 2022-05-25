import { StyleSheet } from 'react-native';
import { AppColors } from '../../../general/constants/AppStyle';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  reviewContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: AppColors.primaryColor,
  },
  ratingSection: {
    height: 94,
    backgroundColor: AppColors.primaryColor,
    flexDirection: 'row',
  },
  ratingOverall: {
    fontFamily: 'Metropolis',
    fontWeight: '800',
    fontSize: 44,
    letterSpacing: -0.41, 
    lineHeight: 44,
    color: '#F7F7F7',
  },
  firstCol: {
    flex: 3, 
  },
  secondCol: {
    flex: 3,
    alignItems: 'flex-end',
  },
  thirdCol: {
    flex: 5,
  },
  lastCol: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  text: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    color: '#ABB4BD',
  },
  indicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 34, 
    marginBottom: 28,
  },
  check: {
    flexDirection: 'row',
  },
  countReview: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 22,
    lineHeight: 22,
    color: '#F7F7F7',
  }, 
  button: {
    position: 'absolute',
    bottom: 10,
    right: 16,
    backgroundColor: '#EF3651',
    borderRadius: 25,
    width: 128, height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  buttonText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 11,
    color: '#F5F5F5',
  }
});
export default styles;
