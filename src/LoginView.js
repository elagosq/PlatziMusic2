/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  
  StyleSheet,  
  View,
  Text,
  Button,
  Image,
  StatusBar  
} from 'react-native';

import FBSDK,  {
  LoginButton,
  AccessToken,
 
} from 'react-native-fbsdk'

import { Actions } from 'react-native-router-flux'

import firebase,
       { firebaseAuth,firebaseDatabase } 
       from './firebase'

const { FacebookAuthProvider } = firebase.auth

export default class LoginView extends Component {   
   state = {
    credentials: null
   }
  
  /*este metodo se va llamar antes que el componente se haya montado */
  componentWillMount(){
    this.authenticateUser()
  }

  authenticateUser = () => {
   AccessToken.getCurrentAccessToken().then((data) => {
    const { accessToken } = data
    const credential = FacebookAuthProvider.credential(accessToken)   
    firebaseAuth.signInWithCredential(credential).then((credentials) => {
      Actions.root()
     this.setState({ credentials })
    }, (error) => {
      console.log("Sign In Error", error);
    })
  })
 }
  
  handleLoginFinished = (error, result) => {
    if (error) {
      console.error(error)
    } else if (result.isCancelled) {
      alert("login is cancelled.");
    } else {     
       this.authenticateUser()
    }       
  }

  render() {    
    return (     
       <Image source={require('./background.jpg')} style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0.20)"
          animated
         />         
         <Text style={styles.welcome}>
           Bienvenidos a PlatziMusic
         </Text>   
         <Image source={require('./logo.png')} style={styles.logo}/>                       
            <LoginButton
            readPermissions={['public_profile','email']}
            onLoginFinished={this.handleLoginFinished}
            onLogoutFinished={() => alert("logout.")}/>
      </Image> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height:null,        
    backgroundColor: 'lightgray',
    paddingTop:50,
    justifyContent:'center',
    alignItems:'center'
  },
  logo:{
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  welcome:{
    fontSize:24,
    fontWeight:'600',
    marginBottom:20,
    backgroundColor:'transparent',
    color:'white'
  }

});


