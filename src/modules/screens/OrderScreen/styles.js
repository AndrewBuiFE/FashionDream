import { StyleSheet } from 'react-native';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  orderContainer: {
    width: '100%',
    backgroundColor: 'black',
    flex: 1,
  },
  status: {
    marginTop: 12,
    flexDirection: 'row',
  },
  statusContainer: {
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
  descriptionText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#F5F5F5',
  },
});
export default styles;
