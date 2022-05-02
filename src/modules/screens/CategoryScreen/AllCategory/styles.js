import {StyleSheet} from 'react-native';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  categoryContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'black',
  },
  categoryItem: {
    height: 47,
    justifyContent: 'center',
    paddingLeft: 40,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#ABB4BD',
    opacity: 0.25,
  },
  title: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    color: '#F7F7F7',
  },
  text: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#ABB4BD',
    marginTop: 16,
    marginLeft: 16,
  },
});
export default styles;
