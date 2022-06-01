import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../general/constants/AppStyle';

const styles = StyleSheet.create({
    cellContainer: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: AppColors.primaryColor,
      },
      contentSection: {
          marginLeft: 16,
          flex: 1,
      },
      title: {
        fontFamily: 'Metropolis',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 16,
        color: '#F7F7F7',
        marginTop: 18,
      },
      suggestion: {
        fontFamily: 'Metropolis',
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 11,
        color: '#ABB4BD',
        marginTop: 9,
      },
      arrowSection: {
          marginRight: 10,
        justifyContent: 'center',
      },
});
export default styles;
