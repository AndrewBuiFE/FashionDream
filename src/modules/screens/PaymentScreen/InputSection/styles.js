import {StyleSheet} from 'react-native';
import {AppColors} from '../../../../general/constants/AppStyle';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
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
});
export default styles;
