import React, { Component} from 'react';
import {FlatList, Text} from 'react-native';
import Layout from '../components/suggestion-list-layout';
class SuggestionList extends Component{
  render(){
    const list = [
      {
        title: 'joel',
        key: '1'
      },
      {
        title: 'vilca',
        key: '2'
      }
    ]
    return(
      <Layout
        title= "Recomendado Para ti"
      >
      <FlatList
      data={list}
      renderItem={({ item })=> <Text>{item.title}</Text>}
      />
      </Layout>
    )
  }
}

export default SuggestionList