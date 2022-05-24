import { StyleSheet } from 'react-native';
import { AppColors } from '../../../general/constants/AppStyle';
const styles = StyleSheet.create({
  settingContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: AppColors.primaryColor,
  },
  settingTitleContainer: {
    height: 34,
    marginTop: 18,
    marginLeft: 16,
  },
  settingTitle: {
    fontFamily: 'Metropolis',
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 34,
    color: '#F7F7F7',
  },
  titleContainer: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
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
  action: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 14,
    color: '#ABB4BD',
    lineHeight: 14,
  },
  notification: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 24,
  }
});
export default styles;
