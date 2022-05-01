import { StyleSheet } from 'react-native';
import { AppColors, AppDimensions } from '../../../general/constants/AppStyle';
const styles = StyleSheet.create({
  containerView: {
    height: AppDimensions.NavigationBar.height + 20,
    flexDirection: 'row',
    width: '100%',
  },

  viewLeftAction: {
    position: 'absolute',
    left: AppDimensions.mainPadding,
  },

  viewRightAction: {
    position: 'absolute',
    right: AppDimensions.mainPadding,
  },

  textTitle: {
    fontFamily: 'Metropolis',
    fontWeight: '700',
    fontSize: AppDimensions.NavigationBar.titleSize,
    lineHeight: 34,
    color: AppColors.titleColor,
  },
  divider: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
  },
});
export default styles;