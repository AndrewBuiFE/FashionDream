import {StyleSheet} from 'react-native';
import {AppColors} from '../../../general/constants/AppStyle';
const styles = StyleSheet.create({
  catalogContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: AppColors.primaryColor,
  },
  categoryTitle: {
    height: 34,
    marginTop: 18,
    marginLeft: 16,
  },
  categoryText: {
    fontFamily: 'Metropolis',
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 34,
    color: '#F7F7F7',
  },
  clothesTypes: {
    marginTop: 12,
    flexDirection: 'row',
  },
  typeContainer: {
    width: 100,
    height: 30,
    borderRadius: 29,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },
  typeText: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#2A2C36',
  },
  productAction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    marginLeft: 16,
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 68,
  },
  sort: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 11,
    color: '#F7F7F7',
  },
  layout: {
    position: 'absolute',
    right: 16,
  },
});
export default styles;
