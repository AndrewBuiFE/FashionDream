import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AppIcons } from '../../../../general/constants/AppResource';
import styles from './styles';
ProfileCell.propTypes = {
    title: PropTypes.string,
    suggestion: PropTypes.string,
    marginTop: PropTypes.number,
};
ProfileCell.defaultProps = {
    title: 'My profile',
    suggestion: 'Here is my profile',
    marginTop: 0,
};

function ProfileCell(props) {
    const {title, suggestion, marginTop} = props;
  return (
    <TouchableOpacity style = {[styles.cellContainer,{ marginTop: marginTop}]}>
         <View style = {styles.contentSection}>
             <Text style = {styles.title}>{title}</Text>
             <Text style = {styles.suggestion}>{suggestion}</Text>
         </View>
         <View style = {styles.arrowSection}>
             <Image source={AppIcons.right_arrow} />
         </View>
    </TouchableOpacity>
  );
}
export default ProfileCell;
