import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    tag: 'tag',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    tag: 'tag',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    tag: 'tagd',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <View style={styles.top}>
      <View style={styles.topLeft}>
        <Image style={styles.profileImage}></Image>
      </View>
      <View style={styles.topRight}>
        <Text style={{fontSize:18}}>{title}</Text>
        <View style={{alignItems:"flex-start"}}>
          <Text style={styles.tagTitle}>tag</Text>
        </View>
      </View>
    </View>
    <View style={styles.middle}>
      <Image  style={styles.image} source={{uri : "http://mobile-c.net/data/editor/2009/thumb-1920437212_ikUevfY9_613971a9fc9fe779acb7c5cee0262350df87d9f3_820x461.jpg" }}></Image> 
    </View>
    <View style={styles.bottom}>
      <Text>hifdddddddddddddddddda</Text>
    </View>
  </View>
);

const Following = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
);
  return (
    <View style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"gray",
  },
  item: {
    backgroundColor: 'white',
    padding: 1,
    height: 550,
    marginBottom: 5,
  },
  top: {
    flex: 1,
    flexDirection:"row",
    padding:5
  },
  topLeft:{
    flex: 1,
    backgroundColor:"red"
  },

  profileImage:{
    width:40,
    height:40,
    borderRadius:40/2,
    backgroundColor:"black"
  },

  topRight:{
    flex: 9,
    paddingLeft: 10,
    backgroundColor:"yellow"
  },

  tagTitle:{
    paddingVertical:5,
    paddingHorizontal:10,
    backgroundColor:"#C64DF7",
    textAlign: 'center',
    fontWeight:"bold",
    fontSize:10,
    color:"#fff", 
    borderRadius:66      
},

  middle:{
    flex: 8,
    backgroundColor:"blue",
  },
  image:{
    height: 400,
    resizeMode: 'cover',
  },
  bottom:{
    flex:1.5
  }
  

});

export default Following;

