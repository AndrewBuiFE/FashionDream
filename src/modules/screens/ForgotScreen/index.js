import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppIcons } from '../../../general/constants/AppResource';
import AppHeader from '../../components/AppHeader';
import GlobalButton from '../../components/GlobalButton/index';
import styles from './styles';

export default function ForgotScreen(props) {
  return (
    <SafeAreaView>
      <AppHeader backgroundColor="black" title="Forgot Password">
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
          <GlobalButton actionText='SEND' marginTop={55} />
        </View>
    </SafeAreaView>
  );
}
