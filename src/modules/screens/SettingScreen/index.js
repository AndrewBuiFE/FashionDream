import React, { useState } from 'react';
import {
  Image,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppIcons } from '../../../general/constants/AppResource';
import AppHeader from '../../components/AppHeader/index';
import PasswordModal from '../../views/PasswordModal/index';
import InputSection from '../PaymentScreen/InputSection/index';
import styles from './styles';

export default function SettingScreen(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isShowPassword, setShowPassword] = useState(false);
  return (
    <SafeAreaProvider>
      <View style={styles.settingContainer}>
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
        <PasswordModal
          isVisible={isShowPassword}
          onModalHidden={() => {
            setShowPassword(false);
          }}
          onMenuClick={menu => {
            switch (menu) {
              case 0:
                console.log('0');
                break;
              case 1:
                console.log('1');
                break;
              case 2:
                console.log('2');
                break;
              case 3:
                console.log('3');
                break;
              case 4:
                console.log('4');
                break;
              default:
                console.log('-1');
                break;
            }
          }}
        />
        <View style={styles.settingTitleContainer}>
          <Text style={styles.settingTitle}>Settings</Text>
        </View>
        <View style={[styles.titleContainer, {marginTop: 23}]}>
          <Text style={styles.title}>Personal information</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Full name"
            placeholderTextColor={'#ABB4BD'}
            style={styles.textInput}
          />
        </View>
        <InputSection title={'Date of Birth'} content={'12/06/2000'} />
        <View style={[styles.titleContainer, {marginTop: 54}]}>
          <Text style={styles.title}>Password</Text>
          <TouchableOpacity onPress={() => {
            setShowPassword(true);
          }}>
            <Text style={styles.action}>Change</Text>
          </TouchableOpacity>
        </View>

        <InputSection title={'Password'} content={'**********'} />
        <View style={[styles.titleContainer, {marginTop: 55}]}>
          <Text style={styles.title}>Notification</Text>
        </View>
        <View>
          <View style={styles.notification}>
            <Text style={[styles.title, {fontSize: 14}]}>Sales</Text>
            <Switch
              // trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#55D85A' : '#ABB4BD'}
              // ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.notification}>
            <Text style={[styles.title, {fontSize: 14}]}>New arrivals</Text>
            <Switch
              // trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#55D85A' : '#ABB4BD'}
              // ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.notification}>
            <Text style={[styles.title, {fontSize: 14}]}>
              Delivery status change
            </Text>
            <Switch
              // trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#55D85A' : '#ABB4BD'}
              // ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
