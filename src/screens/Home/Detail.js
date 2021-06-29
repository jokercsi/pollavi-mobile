import React, { Component } from 'react'
import {TouchableOpacity, View,Text,Image, StyleSheet} from 'react-native'


const Detail = ({route}) => {
    const [item, setitem] = React.useState(null);
    const [photo, setphoto] = React.useState(null);


    React.useEffect(() => {
        let { item } = route.params;

        setitem(item.name)
        setphoto(item.photo)
    })

    return (
        <View>
            <TouchableOpacity onPress={()=> alert("hi")} style={{backgroundColor:"blue"}}>
                <Text style={{color:"white"}}>{item}</Text>
                <Text style={{color:"white"}}>{photo}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Detail;