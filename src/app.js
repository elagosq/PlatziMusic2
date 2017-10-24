/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform 
} from 'react-native';


import {Scene, Router} from 'react-native-router-flux';

import HomeView from './HomeView'
import LoginView from './LoginView'
import artistDetail from './ArtistDetailView'

class PlatziMusic2 extends React.Component {
  render() {
    const isAndroid = Platform.OS === 'android'
    return <Router>
      <Scene key="login" component={LoginView} hideNavBar />
      <Scene key="root">      
        <Scene key="home" component={HomeView} hideNavBar />
        <Scene key="artistDetail" component={artistDetail}  title="Comentarios" hideNavBar={false}/>
      </Scene>
    </Router>
  }
}


AppRegistry.registerComponent('PlatziMusic2', () => PlatziMusic2);
