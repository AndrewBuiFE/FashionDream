import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppIcons } from '../../../general/constants/AppResource';
import { ScreenNames } from '../../../general/constants/ScreenNames';
import AppHeader from '../../components/AppHeader';
import GlobalButton from '../../components/GlobalButton/index';
import styles from './styles';

export default function LoginScreen(props) {
  const [username, checkUsername] = useState();
  const [password, checkPassword] = useState();
  const [invalid, showInvalidMess] = useState(false);
  return (
    <SafeAreaView>
      <AppHeader backgroundColor="black" title="Login">
        <>
          {/* <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Image source={AppIcons.left_arrow} />
          </TouchableOpacity> */}
        </>
        <></>
      </AppHeader>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.loginContainer}>
          <View style={styles.inputSection}>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              placeholderTextColor="#ABB4BD"
              onChangeText={text => {
                showInvalidMess(false);
                const regex = /([a-zA-Z0-9]){6,20}/g;
                if (text.length == 0) {
                  checkUsername(undefined);
                  return;
                }
                if (text.match(regex)) {
                  checkUsername(true);
                } else {
                  checkUsername(false);
                }
              }}></TextInput>
            {username === undefined ? null : username ? (
              <Image source={AppIcons.check} style={styles.check1} />
            ) : (
              <Image source={AppIcons.close} style={styles.check1} />
            )}
            <TextInput
              style={[styles.textInput, {marginTop: 8}]}
              placeholder="Password"
              placeholderTextColor="#ABB4BD"
              secureTextEntry={true}
              onChangeText={text => {
                showInvalidMess(false);
                const regex = /([a-zA-Z0-9]){6,20}/g;
                if (text.length == 0) {
                  checkPassword(undefined);
                  return;
                }
                if (text.match(regex)) {
                  checkPassword(true);
                } else {
                  checkPassword(false);
                }
              }}></TextInput>
            {password === undefined ? null : password ? (
              <Image source={AppIcons.check} style={styles.check2} />
            ) : (
              <Image source={AppIcons.close} style={styles.check2} />
            )}
          </View>
          {invalid ? (
            <Text style={[styles.text, {color: 'red', marginTop: 5}]}>
              Invalid username or password!
            </Text>
          ) : (
            <View style={styles.forgotSuggestion}>
              <Text style={styles.text}>Forgot your password?</Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('ForgotScreen');
                }}>
                <Image source={AppIcons.arrow_right} />
              </TouchableOpacity>
            </View>
          )}
          <GlobalButton
            actionText="LOGIN"
            marginTop={30}
            action={() => {
              if (username && password)
                props.navigation.navigate(ScreenNames.mainTab);
              else showInvalidMess(true);
            }}
          />
          <View style={{marginTop: 194}}>
            <Text style={styles.text}>Or login with social account</Text>
          </View>
          <View style={styles.socialSection}>
            <View style={[styles.socialContainer, {marginRight: 8}]}>
              <Image source={AppIcons.google} />
            </View>
            <View style={[styles.socialContainer, {marginLeft: 8}]}>
              <Image source={AppIcons.facebook} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
