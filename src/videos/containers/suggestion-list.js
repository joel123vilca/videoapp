import React, { Component} from 'react';
import {FlatList, Text} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component{
  renderEmpty = () => <Empty text="no hay sugerencias"/>
  itemSeparator = () => <Separator/>
  renderItem = ({item}) =>{
    return(
    <Suggestion {...item}/>
  )
  }
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
      ListEmptyComponent={this.renderEmpty}
      ItemSeparatorComponent = {this.itemSeparator}
      renderItem={this.renderItem}
      />
      </Layout>
    )
  }
}

export default SuggestionList
