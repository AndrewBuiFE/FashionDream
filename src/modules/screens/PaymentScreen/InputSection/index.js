import React, { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import styles from './styles';
export default function InputSection(props) {
  const {title, content, imageSource, handleInput} = props;
  const [input, setInput] = useState('');
  return (
    <View style={styles.inputContainer}>
      <View style={styles.numberSection}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
        <TextInput
          placeholder={content}
          placeholderTextColor={'#F7F7F7'}
          style={styles.textInput}
          value = {input}
          onChangeText = {(value) => {
            setInput(value)
            handleInput(value);
          }}
        />
      </View>
      <View>
        <Image />
      </View>
    </View>
  );
}
