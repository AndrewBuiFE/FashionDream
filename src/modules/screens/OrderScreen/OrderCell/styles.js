import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../general/constants/AppStyle';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  orderCellContainer: {
    height: 164,
    marginHorizontal: 16,
    backgroundColor: AppColors.cellColor,
    borderRadius: 8,
    paddingHorizontal: 18,
  },
  firstRow: {
    height: 20,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 19,
  },
  secondRow: {
    height: 20,
    marginTop: 15,
    flexDirection: 'row',
  },
  thirdRow: {
    height: 20,
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  fourthRow: {
    height: 36, 
    marginTop: 14, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantity: {
    flexDirection: 'row',
  },
  totalAmount: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#ABB4BD',
  },
  text: {
    fontFamily: 'Metropolis',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: '#F7F7F7',
  },
  status: {
    fontFamily: 'Metropolis',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: '#55D85A',
  }
});
export default styles;
