import {StyleSheet} from 'react-native';
import {AppColors} from '../../../general/constants/AppStyle';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  sizeContainer: {
    height: 368,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    backgroundColor: AppColors.modalColor,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 36,
    height: 22,
  },
  title: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    color: '#F7F7F7',
  },

  sizeInfo: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  sizeInfoText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    color: '#F7F7F7',
  },
  divider: {
    borderWidth: 0.4,
    opacity: 0.25,
    borderColor: '#ABB4BD',
  },
});
export default styles;
