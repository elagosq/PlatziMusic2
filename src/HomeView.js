/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  
  StyleSheet,  
  View,
  Picker,
  ActivityIndicator,
  Platform  
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ArtistList from './ArtistList'
import { getArtistsCountry } from './api-client'
import PaisPicker from './pais-picker'


export default class HomeView extends Component {
  
  state = {
    artists : null,
    loading:true,
    country:''
  }

  /*componente haya sido renderizado se ejecuta el metodo*/
  componentDidMount(){
    this.handleCountryChange('chile');
  }

  handleCountryChange(country){
    this.setState({
      country
    })
    getArtistsCountry(country)
    .then(data => this.setState({ artists : data }))
  }

  render() {   
    const artists = this.state.artists   
    return (
      <View style={styles.container}> 
      <PaisPicker
        selectedValue={this.state.country}
        onValueChange={(country) => this.handleCountryChange(country)}        
       />             
      {!artists && <ActivityIndicator size="large" />}
      {artists && <ArtistList artists={artists} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,        
    backgroundColor: 'lightgray',
    paddingTop:Platform.select({
      ios:50,
      android:10
    }),
    paddingBottom:30    
  },
});


