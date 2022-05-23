import { StyleSheet } from 'react-native';
import { AppColors } from '../../../general/constants/AppStyle';

const styles = StyleSheet.create({
    profileContainer: {
        width: '100%',
        flex: 1,
        backgroundColor: AppColors.primaryColor,
      },
      profileTitle: {
        height: 34,
        marginTop: 18,
        marginLeft: 16,
      },
      profileText: {
        fontFamily: 'Metropolis',
        fontWeight: '700',
        fontSize: 34,
        lineHeight: 34,
        color: '#F7F7F7',
      },
      generalInfo: {
          marginTop: 24,
          height: 64,
          flexDirection: 'row',
          backgroundColor: AppColors.primaryColor,
          paddingHorizontal: 16,
      },
      imageSection: {
    //    backgroundColor: 'blue',
      },
      image: {
          width: 64,
          height: 64,
          borderRadius: 50,
      }, 
      contentSection: {
          flex: 1,
          marginLeft: 18,
          justifyContent: 'center',
      }, 
      name: {
        fontFamily: 'Metropolis',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 22,
        color: '#F7F7F7',
      }, 
      email: {
        fontFamily: 'Metropolis',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        color: '#ABB4BD',
      }
});
export default styles;
