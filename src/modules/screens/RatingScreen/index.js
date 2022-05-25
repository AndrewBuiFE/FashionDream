import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppIcons } from '../../../general/constants/AppResource';
import AppHeader from '../../components/AppHeader/index';
import Star from '../HomeScreen/components/Star/index';
import ReviewCell from './ReviewCell/index';
import styles from './styles';
RatingScreen.propTypes = {};
RatingScreen.defaultProps = {};
let promoCodeValue = '';
function RatingScreen(props) {
  const [isShowPromoModal, setShowPromoModal] = useState(false);
  const [isShowSuccess, setShowSuccess] = useState(false);
  return (
    <SafeAreaProvider>
      <View style={styles.reviewContainer}>
        <AppHeader title="Rating&Reviews">
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
        <View style = {{paddingLeft: 16, paddingRight: 16, marginTop: 41,}}>
          <View style={styles.ratingSection}>
            <View style={styles.firstCol}>
              <Text style={styles.ratingOverall}>4.3</Text>
              <Text style={styles.text}>23 ratings</Text>
            </View>
            <View style={styles.secondCol}>
              <Star starCount={5} />
              <View style={{height: 6}}></View>
              <Star starCount={4} />
              <View style={{height: 6}}></View>
              <Star starCount={3} />
              <View style={{height: 6}}></View>
              <Star starCount={2} />
              <View style={{height: 6}}></View>
              <Star starCount={1} />
            </View>
            <View style={styles.thirdCol}>
              <View style = {{borderRadius: 4, backgroundColor: '#FF3E3E', width: 114, height: 8, marginVertical: 3, marginLeft: 9}}></View>
              <View style={{height: 6}}></View>
              <View style = {{borderRadius: 4, backgroundColor: '#FF3E3E', width: 114, height: 8, marginVertical: 3, marginLeft: 9}}></View>
              <View style={{height: 6}}></View>
              <View style = {{borderRadius: 4, backgroundColor: '#FF3E3E', width: 114, height: 8, marginVertical: 3, marginLeft: 9}}></View>
              <View style={{height: 6}}></View>
              <View style = {{borderRadius: 4, backgroundColor: '#FF3E3E', width: 114, height: 8, marginVertical: 3, marginLeft: 9}}></View>
              <View style={{height: 6}}></View>
              <View style = {{borderRadius: 4, backgroundColor: '#FF3E3E', width: 114, height: 8, marginVertical: 3, marginLeft: 9}}></View>
            </View>
            <View style={styles.lastCol}>
              <Text>13</Text>
              <Text>4</Text>
              <Text>3</Text>
              <Text>3</Text>
              <Text>9</Text>
            </View>
          </View>
          <View style = {styles.indicator}>
            <Text style = {styles.countReview}>8 reviews</Text>
            <View>
              <Image />
              <Text style = {styles.text}>With photo</Text>
            </View>
          </View>
          <ReviewCell />
        </View>
        <TouchableOpacity style = {styles.button}>  
            <Image />
            <Text style = {styles.buttonText}>Write a review</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
export default RatingScreen;
