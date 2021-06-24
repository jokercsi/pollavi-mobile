import React from 'react'
import {Text, View, StyleSheet, SafeAreaView} from 'react-native'
import Cards from './Cards'


const Recommend = () => {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.Cards}> 
                    <Cards style={styles.Cards}/>
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