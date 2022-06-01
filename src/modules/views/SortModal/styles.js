import { StyleSheet } from 'react-native';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  sortContainer: {
    height: 352,
    backgroundColor: '#1E1F28',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    position: 'absolute',
    width: '100%',
  },
  titleContainer: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 16,
  },
  titleText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 21.6,
    color: '#F7F7F7',
  },
  sortItem: {
    height: 48,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  itemText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    color: '#F7F7F7',
  },
  divider: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    marginHorizontal: 16,
    opacity: 0.1,
  },
});
export default styles;
