import { StyleSheet } from 'react-native';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  orderContainer: {
    width: '100%',
    backgroundColor: 'black',
    flex: 1,
  },
  generalSection: {
    marginHorizontal: 16,
  },
  firstRow: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 19,
  },
  secondRow: {
    height: 20,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tracking: {
    flexDirection: 'row',
  },
  titleSection: {
    marginTop: 16,
    marginLeft: 16,
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
  },
  orderInfo: {
    marginHorizontal: 16,
  },
  infoCell: {
    flexDirection: 'row',
    marginTop: 24,
  },
  buttonArea: {
    marginTop: 34,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default styles;
