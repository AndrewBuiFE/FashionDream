import {StyleSheet} from 'react-native';
import {AppDimensions} from '../../../general/constants/AppStyle';

export default appHeaderStyle = StyleSheet.create({
  containerView: {
    height: AppDimensions.NavigationBar.height,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: AppColors.navBarBackgroundColor,
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
    fontWeight: '400',
    fontSize: 18,
    color: '#F7F7F7',
    textAlign: 'center',
  },
});
