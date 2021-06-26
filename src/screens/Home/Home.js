import React from 'react';
import { View, FlatList, Text, StyleSheet, Animated, SafeAreaView } from 'react-native';

import Tags from './Tags'

const data = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
];

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class Home extends React.Component {
  state = {
    isLoading: false,
    animatedValue: new Animated.Value(0),
  };

  onRefresh = () => {
    this.setState({isLoading: true})
    setTimeout(() => this.setState({isLoading: false}), 1500)
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.nonsenseItem}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    );
  };

  render() {
    return (
      <AnimatedFlatList
        numColumns= {2}
        contentContainerStyle={{ paddingTop: 100, alignSelf: 'stretch' }}
        refreshing={this.state.isLoading}
        onRefresh={this.onRefresh}
        scrollEventThrottle={16} // <-- Use 1 here to make sure no events are ever missed
        onScroll={this.props.onScroll}
        data={data}
        renderItem={this._renderItem}
        keyExtractor={(item, i) => i}
        ListHeaderComponent={Tags} 
      />
    );
  }
}

export default class AnimatedHeader extends React.Component {
  state = {
    animatedValue: new Animated.Value(0),
  };

  _renderItem = ({ item }) => {
    return (
      <View style={styles.nonsenseItem}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    );
  };

  render() {
    let translateY = this.state.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: [0, -180],
      extrapolate: 'clamp',
    });

    return (
      <SafeAreaView style={styles.container}>
        <AnimatedList
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: this.state.animatedValue } },
              },
            ],
            { useNativeDriver: true } // <-- Add this
          )}
        />
        <Animated.View
          style={[styles.headerWrapper, { transform: [{ translateY }] }]}
        >
        <Text style={styles.titleText}>
        testo a caso da ridurre
        </Text>
        </Animated.View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  nonsenseItem: {
    backgroundColor: 'red',
    margin: 8,
  },
  itemText: {
    backgroundColor: '#09c',
    fontSize: 20,
    padding: 20,
    textAlign: 'center',
    color: '#FFF'
  },
  titleText: {color: '#FFF'},
  headerWrapper: {
    position: 'absolute',
    backgroundColor: 'rgba(200,0,50,0.3)',
    height: 100,
    left: 0,
    right: 0,
  },
});
