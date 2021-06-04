import React from 'react';
import {Image,Text, ScrollView, FlatList, View, TouchableOpacity, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import users from '../../../userList.json';
import sponser from '../../../sponserList.json';

//카드 만들기 참고자료
//https://www.youtube.com/watch?v=iMCM1NceGJY

//사이즈 바꾸기
//https://github.com/AppAndFlow/react-native-masonry-list
//https://stackoverflow.com/questions/43502954/react-native-flatlist-with-columns-last-item-width

//올리면 다 같이 올리기
//https://www.youtube.com/watch?v=r7f03VJ8bDE

const Cards = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.sponserView}>
                <TouchableOpacity style={styles.sponserCard}>
                    <Text>sponser</Text>
                </TouchableOpacity>
            </View> */}

            <View style={styles.sponserView}>
                <FlatList
                    data={users}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.card} key={item.name[0]}>
                            <View style={{width:300, height: 200}}>
                                <Image  style={styles.imageStyle} source={{uri :item.photo[0]}}></Image> 
                                <Text> {item.name} </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={styles.userView}>
                <FlatList
                    numColumns= {2}
                    data={users}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.card} key={item.name}>
                            <View style={{width:175, height: 200}}>
                                <Image  style={styles.imageStyle} source={{uri :item.photo}}></Image> 
                                <Text> {item.name} </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
};

export default Cards;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        backgroundColor: "red"
    },
    sponserView:{
        flex:1,
        margin:10,
        backgroundColor:'#fff'
    },
    userView:{
        flex:2
    },
    sponserCard:{
        width: "100%",
        height: "100%"
    },
    card:{
        margin:10,
        backgroundColor:'#02F'
    },
    imageStyle:{
        width: "100%",
        height: "100%"
    }
})