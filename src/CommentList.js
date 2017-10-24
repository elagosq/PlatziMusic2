/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
} from 'react-native';

import Comment from './Comment'

export default class CommentList extends Component {

   constructor(props) {
     super(props);
     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
       dataSource: ds
     }
   }

   componentDidMount(){
    this.updateDatasource(this.props.comments)
   }

   /*este metodo se llama cada vez que la propiedades cambien, se envian al componente*/
   componentWillReceiveProps(newProps){
    if(newProps.comments !== this.props.comments){
      this.updateDatasource(newProps.comments)
    }
   }
   
   updateDatasource = (data) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data)
      })
   }

  render() {
    return (
      <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(comment) => {
           return <Comment text={comment.text} avatar={comment.userPhoto} />
          }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop:50,
  },
});
