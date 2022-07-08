import React, {useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppIcons} from '../../../general/constants/AppResource';
import {ScreenNames} from '../../../general/constants/ScreenNames';
import commonApi from '../../../libs/api/commonApi';
import AppHeader from '../../components/AppHeader';
import GlobalButton from '../../components/GlobalButton/index';
import styles from './styles';
const validate = text => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const testedReg = reg.test(text);
  if (testedReg === false) {
    console.log('Email is Not Correct');
  } else {
    console.log('Email is Correct');
  }
  return testedReg;
};

const isSignUp = userForm => {
  if (!userForm.email || !userForm.username || !userForm.password) return false;
  if (userForm.password !== userForm.repassword) return false;
  if (!validate(userForm.email)) return false;
  return true;
};
export default function SignupScreen(props) {
  const [userForm, setUserForm] = useState({
    username: '',
    password: '',
    repassword: '',
    email: '',
  });
  const handleChange = (name, value) => {
    setUserForm({
      ...userForm,
      [name]: value.replace(/\s+/g, ''),
    });
  };
  console.log('userform: ', userForm);
  return (
    <SafeAreaView>
      <AppHeader backgroundColor="black" title="Sign up">
        <>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Image source={AppIcons.left_arrow} />
          </TouchableOpacity>
        </>
        <></>
      </AppHeader>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.signupContainer}>
          <View style={styles.inputSection}>
            <TextInput
              style={[styles.textInput]}
              placeholder="Name"
              placeholderTextColor="#ABB4BD"
              onChangeText={text => {
                handleChange('username', text);
              }}></TextInput>
            <TextInput
              style={[styles.textInput, {marginTop: 8}]}
              placeholder="Email"
              placeholderTextColor="#ABB4BD"
              onChangeText={text => {
                handleChange('email', text);
              }}></TextInput>
            <TextInput
              style={[styles.textInput, {marginTop: 8}]}
              placeholder="Password"
              placeholderTextColor="#ABB4BD"
              secureTextEntry={true}
              onChangeText={text => {
                handleChange('password', text);
              }}></TextInput>
            <TextInput
              style={[styles.textInput, {marginTop: 8}]}
              placeholder="Password rewrite"
              placeholderTextColor="#ABB4BD"
              secureTextEntry={true}
              onChangeText={text => {
                handleChange('repassword', text);
              }}></TextInput>
          </View>
          <View style={styles.forgotSuggestion}>
            <Text style={styles.text}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('LoginScreen');
              }}>
              <Image source={AppIcons.arrow_right} />
            </TouchableOpacity>
          </View>
          <GlobalButton
            actionText="SIGN UP"
            marginTop={30}
            action={() => {
              let shouldSignUp = isSignUp(userForm);
              if (shouldSignUp) {
                const params = {
                  username: userForm.username,
                  email: userForm.email,
                  password: userForm.password,
                };
                commonApi.register(params).then(res => {
                  if (res.status == 200) {
                    console.log('OK!');
                    props.navigation.navigate(ScreenNames.mainTab);
                  } else {
                    console.log('Not OK!');
                  }
                });
              }
            }}
          />
          <View style={{marginTop: 80}}>
            <Text style={styles.text}>Or sign up with social account</Text>
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
