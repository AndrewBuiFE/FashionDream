import {StyleSheet} from 'react-native';
import {DeviceConstants} from '../../../general/constants/Global';
const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    height: 48,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: DeviceConstants.screenWidth - 16 * 2,
    marginHorizontal: 16,
    // shadowColor: 'rgba(239, 54, 81, 0.35)',
    // shadowOffset: {width: -2, height: 4},
    // shadowOpacity: 1,
    // shadowRadius: 10,
  },
  actionTitle: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#F5F5F5',
  },
});
export default styles;
