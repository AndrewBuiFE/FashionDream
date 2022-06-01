import React from 'react';
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppIcons, AppImages } from '../../../general/constants/AppResource';
import GlobalButton from '../../components/GlobalButton/index';
import Modalheader from '../../components/ModalHeader/index';
import Star from '../../components/Star/index';
import styles from './styles';
RatingModal.propTypes = {};
RatingModal.defaultProps = {};
var menuIndex = -1;
var isCheck = true;
export default function RatingModal(props) {
  const {isVisible, onModalHidden, onMenuClick} = props;
  const insets = useSafeAreaInsets();
  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackdropPress={() => {
        if (onModalHidden) onModalHidden();
      }}
      onModalHide={() => {
        console.log('On modal hide');
        if (menuIndex != -1 && onMenuClick) {
          onMenuClick(menuIndex);
        }
        menuIndex = -1;
      }}
      hasBackdrop={true}
      avoidKeyboard={true}
      onSwipeComplete={() => {
        if (onModalHidden) {
          onModalHidden();
        }
      }}
      swipeDirection="down"
      coverScreen={true}
      style={{margin: 0}}>
      <View style={[styles.addReviewContainer, {bottom: insets.bottom}]}>
        <Modalheader />
        <View style={styles.titleSection}>
          <Text style={styles.titleText}>What is your rate?</Text>
        </View>
        <View style={styles.starSection}>
          <Star
            starCount={5}
            starType="large"
            width={276}
            justifyContent="space-between"
          />
        </View>
        <View style={[styles.titleSection, {width: 227}]}>
          <Text style={styles.titleText} numberOfLines={2}>
            Please share your opinion about the product
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}>
            <TextInput
              placeholder="Your review"
              placeholderTextColor={'#ABB4BD'}
              multiline={true}
              numberOfLines={5}
              textAlignVertical={'top'}
              style={styles.textInput}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.photoSection}>
          <Image source={AppImages.black} style={styles.image} />
          <Image source={AppImages.black} style={styles.image} />
          <View style={styles.add}>
            <TouchableOpacity style={styles.photoButton}>
              <Image source={AppIcons.photo_camera} />
            </TouchableOpacity>
            <Text style={styles.text}>Add your photos</Text>
          </View>
        </View>
        <GlobalButton actionText="SEND REVIEW" marginTop={25} />
      </View>
    </ReactNativeModal>
  );
}
