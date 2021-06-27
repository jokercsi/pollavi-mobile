import React from 'react'
import {ImageBackground ,Text, RefreshControl, FlatList, View, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native'

import Tags from './Tags'
import users from '../../../userList.json';

//아이콘
import Ionicons from '../../../node_modules/react-native-vector-icons/Ionicons';


//카드 만들기 참고자료
//https://www.youtube.com/watch?v=iMCM1NceGJY

//사이즈 바꾸기
//https://github.com/AppAndFlow/react-native-masonry-list
//https://stackoverflow.com/questions/43502954/react-native-flatlist-with-columns-last-item-width

//올리면 다 같이 올리기, 꼭 보기
//https://www.youtube.com/watch?v=r7f03VJ8bDE

//animated scroll flatlist 만들기
//https://www.youtube.com/watch?v=F8x-dyIsrJ8

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const Recommend = ({navigation}) => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.Card}>
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
                        keyExtractor={(item, i) => i}
                        renderItem={({ item }) => (
                            <View style={styles.post}>
                                <TouchableOpacity key={item.name}   onPress={() => navigation.navigate('Detail')} >
                                    <ImageBackground
                                        source={{uri :item.photo}}
                                        style={{alignSelf:'stretch',height:250}}
                                        imageStyle={{borderRadius:10}}>
                                            <View style={{flexDirection:"column", flex:1, justifyContent:'center'}}>
                                                <View style={{flex:0.5}}>
                                                    <View style={{ alignSelf: "flex-end"}}>
                                                    <Ionicons.Button 
                                                        size={25} 
                                                        name="ellipsis-horizontal-sharp"
                                                        color="#fff"
                                                        backgroundColor="transparent"
                                                        onPress={() => alert('This is a button!')}/>
                                                    </View>
                                                </View>
                                                <View style={{flex:0.5}}>
                                                    <View style={{flex:0.4}}>
                                                        <Text> Tag </Text>
                                                    </View>
                                                    <View style={{flex:0.4}}>
                                                        <Text> {item.name} </Text>
                                                    </View>
                                                    <View style={{flex:0.2}}>
                                                        <Text> {item.name} </Text>
                                                    </View>
                                                </View>
                                            </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </SafeAreaView>
        );
};
export default Recommend;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    Card:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        backgroundColor: "#fff"
    },
    post:{
        flex:0.5,
        marginBottom:10,
        marginHorizontal:10,
        borderRadius: 10
    },
})