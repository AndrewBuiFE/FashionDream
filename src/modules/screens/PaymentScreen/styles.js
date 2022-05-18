import {StyleSheet} from 'react-native';
import {AppColors} from '../../../general/constants/AppStyle';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  checkoutContainer: {
    flex: 1,
    backgroundColor: AppColors.primaryColor,
  },
  contentContainer: {
    marginTop: 10,
    marginHorizontal: 16,
    flex: 1,
  },
  title: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    color: '#F7F7F7',
  },
  shippingContainer: {
    height: 108,
    backgroundColor: AppColors.cellColor,
    borderRadius: 8,
    marginTop: 21,
  },
  paymentContainer: {
    height: 72,
    backgroundColor: AppColors.cellColor,
    borderRadius: 8,
    marginTop: 56,
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
  cardSection: {
    flexDirection: 'row',
    marginTop: 14,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 38,
  },
  text: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#F7F7F7',
    marginLeft: 28,
    letterSpacing: -0.15,
  },
  deliveryContainer: {
    marginTop: 21,
    height: 100,
    backgroundColor: AppColors.cellColor,
    borderRadius: 8,
  },
  orderContainer: {
    marginTop: 52,
  },
  orderRow: {
    flexDirection: 'row',
    marginBottom: 14,
    justifyContent: 'space-between',
  },
  orderTitle: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#ABB4BD',
  },
  price: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    color: '#F7F7F7',
  },
  check: {
    flexDirection: 'row',
    marginTop: 25,
  },
  boxText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    marginLeft: 13,
    color: '#F7F7F7',
  },
});
export default styles;
