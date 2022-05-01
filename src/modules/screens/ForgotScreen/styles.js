import {StyleSheet} from 'react-native';
import {AppColors} from '../../../general/constants/AppStyle';
import {DeviceConstants} from '../../../general/constants/Global';
const styles = StyleSheet.create({
  forgotContainer: {
    height: DeviceConstants.screenHeight,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: AppColors.primaryColor,
  },
  guide: {
    marginTop: 87,
    marginHorizontal: 16,
  },
  inputSection: {
    height: 64,
    width: DeviceConstants.screenWidth - 16 * 2,
    marginHorizontal: 16,
    marginTop: 16,
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
});
export default styles;
