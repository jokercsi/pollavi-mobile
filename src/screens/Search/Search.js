//참고하기
//https://snack.expo.dev/@bang9/expandable-search-bar


import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Dimensions,
  ScrollView,
  Alert,
  Animated as RNAnimated,
  Easing as RNAnimatedEasing,
} from 'react-native';

import ReAnimated, {
  Easing as ReAnimatedEasing,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const searchBarHeight = 50;
const topPosition = StatusBar.currentHeight;
const centerPosition = (height - searchBarHeight) / 2;

const useReanmiated = false;
const Animated = useReanmiated ? ReAnimated : RNAnimated;
const Easing = useReanmiated ? ReAnimatedEasing : RNAnimatedEasing;

export default function Search()  {
  const [isOpened, setIsOpened] = React.useState(false);
  const animPosition = React.useRef(new Animated.Value(centerPosition));
  const animWidth = React.useRef();
  const animOpacity = React.useRef();
  const textRef = React.useRef();

  const onFocus = () => {
    setIsOpened(true);
    Animated.timing(animPosition.current, {
      toValue: topPosition,
      duration: 300,
      easing: Easing.out(Easing.ease),
    }).start();
  };

  const onBlur = () => {
    Animated.timing(animPosition.current, {
      toValue: topPosition,
      duration: 300,
      easing: Easing.in(Easing.ease),
    }).start(() => setIsOpened(false));
  };

  
  animWidth.current = animPosition.current.interpolate({
    inputRange: [topPosition, centerPosition],
    outputRange: [width, width * 0.8],
  });

  animOpacity.current = animPosition.current.interpolate({
    inputRange: [0, centerPosition],
    outputRange: [1, 0],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: animOpacity.current,
          backgroundColor: 'white',
          paddingTop: searchBarHeight,
          width: '100%',
          height: '100%',
        }}>
        {isOpened && (
          <ScrollView keyboardShouldPersistTaps={'always'}>
            {new Array(5).fill(Math.random()).map((val, index) => {
              return (
                <Text
                  style={{
                    padding: 10,
                    backgroundColor: 'white',
                    marginBottom: 2,
                  }}
                  key={val}
                  onPress={() => alert('press:' + index)}>
                  검색내역: {index}
                </Text>
              );
            })}
          </ScrollView>
        )}
      </Animated.View>

      <Animated.View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          justifyContent: 'center',
          height: searchBarHeight,
          width: animWidth.current,
          top: topPosition
        }}>
        <TextInput
          ref={textRef}
          onFocus={onFocus}
          onBlur={onBlur}
          style={{
            backgroundColor: 'white',
            borderColor:"#C64DF7", 
            borderWidth: 2, 
            borderRadius: 50, 
            borderBottomWidth: 2,
            width: '100%',
            height: '100%',
            paddingHorizontal: 10,
            fontSize: 14,
          }}
        />
        {isOpened && (
          <Animated.Text
            onPress={textRef.current.blur}
            style={{ position: 'absolute', right: 10, padding: 10, opacity:animOpacity.current }}>
            {'닫기'}
          </Animated.Text>
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex:1
  },
  content:{
    flex: 9,
    backgroundColor:"black"
  },
  searchBar:{
    borderColor:"#C64DF7",
    borderWidth: 2, 
    borderRadius: 50, 
    borderBottomWidth: 2,
    marginHorizontal:10,
    marginVertical:15,
    padding:5
  }
});



// export default class Search extends React.Component {
//   state = {
//     search: '',
//   };

//   updateSearch = (search) => {
//     this.setState({ search });
//   };

//   render() {
//     const { search } = this.state;

//     return (

//       <SearchBar
//         placeholder="검색하기"
//         onChangeText={this.updateSearch}
//         value={search}
//         platform="android"
//         searchIcon={{color:"#C64DF7"}}
//         cancelIcon={{color:"#C64DF7"}}
//         clearIcon={{color:"#C64DF7"}}
//         inputContainerStyle={{borderColor:"#C64DF7", borderWidth: 2, borderRadius: 50, borderBottomWidth: 2,  }}
//         containerStyle={{marginHorizontal:5, marginVertical:10}}

//         />
//    )
//  }
//}