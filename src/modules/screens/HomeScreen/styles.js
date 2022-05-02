import {StyleSheet} from 'react-native';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  homeContainer: {
    width: '100%',
    backgroundColor: 'black',
  },
  header: {
    marginLeft: 16,
    marginTop: 40,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontFamily: 'Metropolis',
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 34,
    color: '#F6F6F6',
  },
  text: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 11,
    color: '#F6F6F6',
    marginRight: 14,
  },
  description: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 11,
    color: '#ABB4BD',
    marginTop: 4,
  },
  buttonContainer: {
    width: 160,
    height: 36,
    borderRadius: 25,
    backgroundColor: '#EF3651',
    alignItems: 'center',
    justifyContent: 'center',
    top: 468,
    left: 10,
    position: 'absolute',
  },
  bannerText: {
    fontFamily: 'Metropolis',
    fontWeight: '900',
    fontSize: 48,
    lineHeight: 48,
    color: '#F7F7F7',
    position: 'absolute',
    top: 354,
    left: 15,
    width: 190,
  },
  buttonText: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#F5F5F5',
  },
  theme: {
    flexDirection: 'column',
  },
  collection: {
    width: '100%',
  },
  otherTheme: {
    flexDirection: 'row',
  },
  leftTheme: {
    flexDirection: 'column',

    width: '50%',
  },
  rightTheme: {
    width: '50%',
  },
  summerSale: {
    flex: 1,

    height: 178,
  },
  blackTheme: {
    flex: 1,
    height: 178,
  },
  themeTitle: {
    fontFamily: 'Metropolis',
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 34,
    position: 'absolute',
  },
});
export default styles;
