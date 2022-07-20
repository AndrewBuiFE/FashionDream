import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppIcons, AppImages } from '../../../general/constants/AppResource';
import { ScreenNames } from '../../../general/constants/ScreenNames';
import AppHeader from '../../components/AppHeader/index';
import ProfileCell from './ProfileCell/index';
import styles from './styles';
ProfileScreen.propTypes = {};
ProfileScreen.defaultProps = {};
const Divider = () => (
    <View style = {{backgroundColor: 'black', height: 1,}}>

    </View>
)

function ProfileScreen(props) {
  return (
    <SafeAreaProvider>
      <View style={styles.profileContainer}>
        <AppHeader title = 'My profile'>
          <>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}>
              <Image source={AppIcons.left_arrow} />
            </TouchableOpacity>
          </>
          <>
            <TouchableOpacity>
              <Image source={AppIcons.search} />
            </TouchableOpacity>
          </>
        </AppHeader>
        <View style = {styles.generalInfo}>
              <View style = {styles.imageSection}>
                  <Image source={AppImages.black} style = {styles.image}/>
              </View>
              <View style = {styles.contentSection}>
                  <Text style = {styles.name}>Matilda Brown</Text>
                  <Text style = {styles.email}>matildabrown@mail.com</Text>
              </View>
        </View>
            <ProfileCell title='My orders' suggestion='Already have orders' marginTop = {28} screenName = {ScreenNames.orderScreen}/>
            <Divider/>
            <ProfileCell title='Shipping addresses' suggestion='3 addresses' screenName={ScreenNames.shippingScreen}/>
            <Divider/>
            <ProfileCell title='Payment method' suggestion='Visa **34' screenName={ScreenNames.paymentScreen}/>
            <Divider/>
            <ProfileCell title='Promocodes' suggestion='You have special promocodes'/>
            <Divider/>
            <ProfileCell title='My reviews' suggestion='Reviews for 4 items'/>
            <Divider/>
            <ProfileCell title='Settings' suggestion='Notifications, password' screenName = {ScreenNames.settingScreen}/>
      </View>
    </SafeAreaProvider>
  );
}
export default ProfileScreen;
