import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppIcons, AppImages } from '../../../general/constants/AppResource';
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
        <AppHeader>
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
        <View style={styles.profileTitle}>
          <Text style={styles.profileText}>My Profile</Text>
        </View>
        <View style = {styles.generalInfo}>
              <View style = {styles.imageSection}>
                  <Image source={AppImages.black} style = {styles.image}/>
              </View>
              <View style = {styles.contentSection}>
                  <Text style = {styles.name}>Matilda Brown</Text>
                  <Text style = {styles.email}>matildabrown@mail.com</Text>
              </View>
        </View>
            <ProfileCell title='My orders' suggestion='Already have 12 orders' marginTop = {28}/>
            <Divider/>
            <ProfileCell title='Shipping addresses' suggestion='3 addresses'/>
            <Divider/>
            <ProfileCell title='Payment method' suggestion='Visa **34'/>
            <Divider/>
            <ProfileCell title='Promocodes' suggestion='You have special promocodes'/>
            <Divider/>
            <ProfileCell title='My reviews' suggestion='Reviews for 4 items'/>
            <Divider/>
            <ProfileCell title='Settings' suggestion='Notifications, password'/>
      </View>
    </SafeAreaProvider>
  );
}
export default ProfileScreen;
