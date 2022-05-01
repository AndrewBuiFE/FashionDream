import {StyleSheet} from 'react-native';
import {AppColors} from '../../../general/constants/AppStyle';
import {DeviceConstants} from '../../../general/constants/Global';
const styles = StyleSheet.create({
  loginContainer: {
    height: DeviceConstants.screenHeight,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: AppColors.primaryColor,
  },
  inputSection: {
    height: 136,
    width: DeviceConstants.screenWidth - 16 * 2,
    marginHorizontal: 16,
    backgroundColor: 'red',
  },
  forgotSuggestion: {
    height: 20,
    width: DeviceConstants.screenWidth - 16 * 2,
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgotText: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#F7F7F7',
    marginRight: 3,
  },
});
export default styles;
