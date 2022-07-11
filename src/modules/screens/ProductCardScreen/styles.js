import {StyleSheet} from 'react-native';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  homeContainer: {
    width: '100%',
    backgroundColor: 'black',
    flex: 1,
  },
  imageSection: {
    height: 413,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  selectionSection: {
    flexDirection: 'row',
    marginTop: 12,
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  selectionBox: {
    borderRadius: 8,
    borderWidth: 0.4,
    // borderColor: '#FF2424',
    borderColor: '#ABB4BD',
    width: 138,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#F7F7F7',
  },
  likeContainer: {
    width: 36,
    height: 36,
    backgroundColor: '#2A2C36',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    marginTop: 22,
    marginHorizontal: 16,
  },
  itemName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 28.8,
    color: '#F7F7F7',
    width: '90%',
  },
  brand: {
    marginTop: 0,
  },
  brandText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 11,
    color: '#ABB4BD',
  },
  description: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  descriptionText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#F5F5F5',
  },
});
export default styles;
