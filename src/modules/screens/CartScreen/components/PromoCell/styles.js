import {StyleSheet} from 'react-native';
import {AppColors} from '../../../../../general/constants/AppStyle';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  promoContainer: {
    marginHorizontal: 16,
    height: 80,
    backgroundColor: AppColors.cellColor,
    borderRadius: 8,
    flexDirection: 'row',
  },
  imageSection: {
    width: 80,
    height: 80,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  promoContent: {flex: 1, marginLeft: 14},
  promoTitle: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#F7F7F7',
    marginTop: 22,
  },
  promoText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 11,
    color: '#F7F7F7',
    marginTop: 4,
  },
  expText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 11,
    color: '#ABB4BD',
    marginTop: 12,
  },
  button: {
    width: 93,
    height: 36,
    borderRadius: 25,
    backgroundColor: '#EF3651',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#F5F5F5',
  },
});
export default styles;
