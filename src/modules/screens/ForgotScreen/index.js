import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppHeader from '../../components/AppHeader';
import GlobalButton from '../../components/GlobalButton';
import styles from './styles';

export default function ForgotScreen(props) {
  return (
    <SafeAreaView>
      <AppHeader backgroundColor="black" title="Forgot Password">
        <></>
        <></>
      </AppHeader>
      <ScrollView>
        <View style={styles.forgotContainer}>
          <View style={styles.guide}>
            <Text style={styles.text}>
              Please, enter your email address. You will receive a link to
              create a new password via email.
            </Text>
          </View>
          <View style={styles.inputSection}>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="#ABB4BD"></TextInput>
          </View>
          <GlobalButton action="SEND" marginTop={55} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
