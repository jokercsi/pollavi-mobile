import React from 'react'
import {Text, View, StyleSheet, SafeAreaView} from 'react-native'
import Cards from './Cards'


const Recommend = () => {
        return (
            <View style={styles.container}>
                <Text>
                    폴라비에서 인기있는 태그들을 확인해보세요
                </Text>
                <SafeAreaView style={styles.Cards }> 
                    <Cards style={styles.Cards }/>
                </SafeAreaView>

            </View>
        );
};
export default Recommend;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    Cards:{
        flex:1
    }
})