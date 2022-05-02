import {StyleSheet} from 'react-native';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  categoryContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'black',
  },
  listCategoryContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 44,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  categoryNameContainer: {},
  categoryName: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    color: '#ABB4BD',
  },
  promotionContainer: {
    height: 100,
    backgroundColor: '#FF3E3E',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  promoTitle: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 28.8,
    color: '#F7F7F7',
  },
  promoDetail: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#F7F7F7',
  },
  categorySection: {
    height: 100,
    borderRadius: 8,
    backgroundColor: '#2A2C36',
    marginTop: 16,
    flexDirection: 'row',
  },
  categoryTextSection: {
    flex: 1,
  },
  categoryTitle: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    color: '#F7F7F7',
    top: 39,
    left: 23,
  },
  categoryImage: {
    flex: 1,
  },
});
export default styles;
