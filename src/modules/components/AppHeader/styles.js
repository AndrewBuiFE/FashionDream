import { StyleSheet } from 'react-native';
import { AppDimensions } from '../../../general/constants/AppStyle';
const styles = StyleSheet.create({
  containerView: {
    height: AppDimensions.NavigationBar.height + 52,
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
  appHeaderTitle: {
    height: 34,
    marginTop: 62,
    marginLeft: 16,
    width: '100%',
  }, 
  title: {
    fontFamily: 'Metropolis',
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 34,
    color: '#F7F7F7',
  }
});
export default styles;