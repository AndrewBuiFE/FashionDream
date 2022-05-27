import { StyleSheet } from 'react-native';
import { AppColors } from '../../../general/constants/AppStyle';
// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  addReviewContainer: {
    height: '80%',
    backgroundColor: '#1E1F28',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    position: 'absolute',
    width: '100%',
  },
  titleSection: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  titleText: {
    textAlign: 'center',
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    color: '#F7F7F7',
  },
  starSection: {
    height: 36, marginTop: 17, marginBottom: 34,
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: AppColors.cellColor,
    marginHorizontal: 16,
    marginTop: 20,
    height: 148,
    paddingLeft: 11,
    paddingRight: 19,
    paddingVertical: 14,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 11,
    color: '#ABB4BD',
  },
  number: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#F7F7F7',
  },
  numberSection: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textInput: {
    padding: 0,
    fontFamily: 'Metropolis',
    fontSize: 14, 
    lineHeight: 21,
    color: '#F7F7F7',
    opacity: 0.8
  },
  check: {
    flexDirection: 'row',
    marginTop: 29,
    marginLeft: 16,
  },
  boxText: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    marginLeft: 13,
    color: '#F7F7F7',
  },
  photoSection: {
    height: 104, 
    flexDirection: 'row',
    marginTop: 45,
    justifyContent: 'space-between',
    borderRadius: 8,
    marginHorizontal: 16,
  },
  image: {
    width: 104, 
    height: 104,
    borderRadius: 8,
  },
  add: {
    alignItems: 'center',
    justifyContent: 'center',
  },  
  photoButton: {
    borderRadius: 50,
    backgroundColor: '#EF3651',
    width: 52, 
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Metropolis',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 11,
    color: '#F7F7F7',
    marginTop: 12,
  }
});
export default styles;
