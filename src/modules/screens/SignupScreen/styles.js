import {StyleSheet} from 'react-native';
import {AppColors} from '../../../general/constants/AppStyle';
import {DeviceConstants} from '../../../general/constants/Global';
const styles = StyleSheet.create({
  signupContainer: {
    height: DeviceConstants.screenHeight,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: AppColors.primaryColor,
  },
  inputSection: {
    height: 208,
    width: DeviceConstants.screenWidth - 16 * 2,
    marginHorizontal: 16,
    marginTop: 73,
  },
  forgotSuggestion: {
    height: 20,
    width: DeviceConstants.screenWidth - 16 * 2,
    marginHorizontal: 16,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textInput: {
    backgroundColor: AppColors.textInputColor,
    height: 64,
    color: '#ABB4BD',
  },
  text: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#F7F7F7',
    marginRight: 3,
  },
  socialSection: {
    height: 64,
    alignItems: 'center',
    marginTop: 12,
    flexDirection: 'row',
  },
  socialContainer: {
    backgroundColor: 'white',
    borderRadius: 24,
    width: 92,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
