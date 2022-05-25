import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppIcons } from '../../../general/constants/AppResource';
import AppHeader from '../../components/AppHeader/index';
import CheckBox from '../../components/CheckBox/index';
import Star from '../../components/Star/index';
import RatingModal from '../../views/RatingModal/index';
import ReviewCell from './ReviewCell/index';
import styles from './styles';
RatingScreen.propTypes = {};
RatingScreen.defaultProps = {};
let promoCodeValue = '';
function RatingScreen(props) {
  const [isShowRatingModal, setShowRatingModal] = useState(false);
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
        <RatingModal
          isVisible={isShowRatingModal}
          onModalHidden={() => {
            setShowRatingModal(false);
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
        <View style = {{paddingLeft: 16, paddingRight: 16, marginTop: 41,}}>
          <View style={styles.ratingSection}>
            <View style={styles.firstCol}>
              <Text style={styles.ratingOverall}>4.3</Text>
              <Text style={styles.text}>23 ratings</Text>
            </View>
            <View style={styles.secondCol}>
              <Star starCount={5} starType = 'small' width={70} justifyContent='flex-end'/>
              <View style={{height: 6}}></View>
              <Star starCount={4} starType = 'small' width={70} justifyContent='flex-end'/>
              <View style={{height: 6}}></View>
              <Star starCount={3} starType = 'small' width={70} justifyContent='flex-end'/>
              <View style={{height: 6}}></View>
              <Star starCount={2} starType = 'small' width={70} justifyContent='flex-end'/>
              <View style={{height: 6}}></View>
              <Star starCount={1} starType = 'small' width={70} justifyContent='flex-end'/>
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
            <View style = {styles.check}>
              <CheckBox />
              <Text style = {styles.text}>With photo</Text>
            </View>
          </View>
          <ReviewCell />
        </View>
        <TouchableOpacity style = {styles.button} onPress={()=> {
          setShowRatingModal(true);
        }}>  
            <Image source={AppIcons.pen}/>
            <Text style = {styles.buttonText}>Write a review</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
export default RatingScreen;
