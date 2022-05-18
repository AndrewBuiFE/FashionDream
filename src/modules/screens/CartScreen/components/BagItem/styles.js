import {StyleSheet} from 'react-native';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  bagItem: {
    marginTop: 24,
    marginHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: '#2A2C36',
    borderRadius: 8,
    height: 104,
  },
  imageSection: {
    flex: 3,
  },
  itemSection: {
    flex: 5,
    marginLeft: 11,
  },
  moreSection: {
    flex: 2,
    flexDirection: 'column',
    marginRight: 8,
    marginTop: 8,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  itemName: {
    marginTop: 11,
  },
  nameText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    color: '#F7F7F7',
  },
  itemDetail: {
    flexDirection: 'row',
    marginTop: 4,
  },
  itemText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 11,
    color: '#ABB4BD',
  },
  quantityChange: {
    flexDirection: 'row',
    marginTop: 14,
  },
  button: {
    width: 36,
    height: 36,
    borderRadius: 50,
    backgroundColor: '#2A2C36',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#F7F7F7',
  },
  priceText: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#F7F7F7',
  },
});
export default styles;
