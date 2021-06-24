import React from 'react';
import {Image,Text,Button, RefreshControl, FlatList, View, TouchableOpacity, StyleSheet} from 'react-native';



import Tags from './Tags'
import LinearGradient from 'react-native-linear-gradient';
import users from '../../../userList.json';
import sponser from '../../../sponserList.json';
import { useMemo } from 'react/cjs/react.production.min';

//카드 만들기 참고자료
//https://www.youtube.com/watch?v=iMCM1NceGJY

//사이즈 바꾸기
//https://github.com/AppAndFlow/react-native-masonry-list
//https://stackoverflow.com/questions/43502954/react-native-flatlist-with-columns-last-item-width

//올리면 다 같이 올리기, 꼭 보기
//https://www.youtube.com/watch?v=r7f03VJ8bDE


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const Cards = () => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <View style={styles.container}>

          
                <FlatList
                    numColumns= {2}
                    contentContainerStyle={{
                        alignSelf: 'stretch'
                    }}
                    data={users}
                    refreshControl={
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={onRefresh}
                        />
                      }
                    //스토리 부분 + 광고 
                    ListHeaderComponent={Tags} 
                    renderItem={({ item }) => (
                        <View style={styles.post}>
                            <TouchableOpacity key={item.name} >
                                <View style={{ zIndex: 1, position: "absolute"}}>
                                <Text> {item.name} </Text>
                                <Button 
                                    onPress={() => alert('This is a button!')}
                                    title="..."
                                    color="#000"
                                    style={{}}
                                />
                                </View>
                                <Image 
                                    style={{
                                        alignSelf:'stretch',
                                        height:150,
                                        borderRadius:10
                                    }}
                                    source={{uri :item.photo}}/>
                            </TouchableOpacity>
                        </View>
                    )}
                />
        </View>
    );
};

export default Cards;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        backgroundColor: "#fff"
    },

    post:{
        flex:0.5,
        backgroundColor:'#f0f',
        marginBottom:10,
        marginHorizontal:10,
        borderRadius: 10
    },

})