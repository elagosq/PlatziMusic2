import React,{Component} from 'react';
import{
 Picker,
 StyleSheet,
 Platform
} from 'react-native'

const isAndroid = Platform.OS == 'android';
const isIOS = Platform.OS == 'ios';

const PaisPicker = (props) =>
    <Picker
    {...props}
    mode="dialog"
    style={[
        styles.contentPicker,
        isAndroid && styles.pickerAndroid,
        isIOS && styles.pickerIOS
    ]}
    >
    <Picker.Item label="Chile" value="chile"/>
    <Picker.Item label="España" value="españa"/>
    <Picker.Item label="Argentina" value="argentina"/>
    <Picker.Item label="Brazil" value="brazil"/>
 </Picker>

const styles =  StyleSheet.create({
  pickerIOS:{
    left:25,
    right:25,
  },
  pickerAndroid:{
    left:20,
    width:165,
    color:'black'
  },
  contentPicker:{
    marginHorizontal:95
  },
  pickerItem:{
    color:'black',    
  }
});

export default PaisPicker; 
