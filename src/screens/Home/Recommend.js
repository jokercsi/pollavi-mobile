import React from 'react'
import {Text, View, StyleSheet, SafeAreaView} from 'react-native'
import Cards from './Cards'


const Recommend = () => {
        return (
            <SafeAreaView style={styles.container}>
                <Cards style={styles.Cards}/>
            </SafeAreaView>
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