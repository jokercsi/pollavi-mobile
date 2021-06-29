import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView
} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

export default class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="검색하기"
        onChangeText={this.updateSearch}
        value={search}
        platform="android"
        searchIcon={{color:"#C64DF7"}}
        cancelIcon={{color:"#C64DF7"}}
        clearIcon={{color:"#C64DF7"}}
        inputContainerStyle={{borderColor:"#C64DF7", borderWidth: 2, borderRadius: 50, borderBottomWidth: 2,  }}
        containerStyle={{marginHorizontal:5, marginVertical:10}}

        />
    )
  }
}