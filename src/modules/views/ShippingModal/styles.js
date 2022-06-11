import { StyleSheet } from 'react-native';
import { AppColors } from '../../../general/constants/AppStyle';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  addCardContainer: {
    height: '100%',
    backgroundColor: '#1E1F28',
    // borderTopLeftRadius: 34,
    // borderTopRightRadius: 34,
    position: 'absolute',
    width: '100%',
  },
  titleSection: {
    marginTop: 16,
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    color: '#F7F7F7',
  },
  inputContainer: {
    backgroundColor: AppColors.cellColor,
    marginHorizontal: 16,
    marginTop: 20,
    height: 64,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 11,
    color: '#ABB4BD',
  },
  number: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#F7F7F7',
  },
  numberSection: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textInput: {
    padding: 0,
  },
  check: {
    flexDirection: 'row',
    marginTop: 29,
    marginLeft: 16,
  },
  boxText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    marginLeft: 13,
    color: '#F7F7F7',
  },
});
export default styles;
