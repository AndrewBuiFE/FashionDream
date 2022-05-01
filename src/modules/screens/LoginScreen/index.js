import React from 'react';
import {Image, ScrollView, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppIcons} from '../../../general/constants/AppResource';
import AppHeader from '../../components/AppHeader';
import GlobalButton from '../../components/GlobalButton';
import styles from './styles';

export default function LoginScreen(props) {
  return (
    <SafeAreaView>
      <AppHeader backgroundColor="black" title="Login">
        <></>
        <></>
      </AppHeader>
      <ScrollView>
        <View style={styles.loginContainer}>
          <View style={styles.inputSection}>
            <TextInput></TextInput>
            <TextInput></TextInput>
          </View>
          <View style={styles.forgotSuggestion}>
            <Text style={styles.forgotText}>Forgot your password?</Text>
            <Image source={AppIcons.arrow_right} />
          </View>
          <GlobalButton action="LOGIN" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
