import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppIcons} from '../../../general/constants/AppResource';
import AppHeader from '../../components/AppHeader';
import GlobalButton from '../../components/GlobalButton';
import styles from './styles';

export default function SignupScreen(props) {
  return (
    <SafeAreaView>
      <AppHeader backgroundColor="black" title="Sign up">
        <></>
        <></>
      </AppHeader>
      <ScrollView>
        <View style={styles.signupContainer}>
          <View style={styles.inputSection}>
            <TextInput
              style={[styles.textInput]}
              placeholder="Name"
              placeholderTextColor="#ABB4BD"></TextInput>
            <TextInput
              style={[styles.textInput, {marginTop: 8}]}
              placeholder="Email"
              placeholderTextColor="#ABB4BD"></TextInput>
            <TextInput
              style={[styles.textInput, {marginTop: 8}]}
              placeholder="Password"
              placeholderTextColor="#ABB4BD"
              secureTextEntry={true}></TextInput>
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
          <GlobalButton action="SIGN UP" marginTop={30} />
          <View style={{marginTop: 126}}>
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
