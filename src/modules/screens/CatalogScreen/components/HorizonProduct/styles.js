import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    height: 104,
    marginTop: 26,
    backgroundColor: '#2A2C36',
    borderRadius: 8,
  },
  imageSection: {
    width: 104,
    height: 104,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  likeContainer: {
    width: 36,
    height: 36,
    backgroundColor: '#2A2C36',
    bottom: -6,
    right: 0,
    position: 'absolute',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  infoSection: {
    marginLeft: 11,
  },
  priceSection: {
    flexDirection: 'row',
    marginTop: 3,
  },
  brand: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 11,
    color: '#ABB4BD',
    marginTop: 4,
  },
  product: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    color: '#F7F7F7',
    marginTop: 11,
  },
  price: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#ABB4BD',
    marginTop: 8,
  },
});
export default styles;
