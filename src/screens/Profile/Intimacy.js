import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Pie from 'react-native-pie';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
const Item = ({ title }) => (
  <View style={styles.item}>
    <Pie
      radius={80}
      innerRadius={75}
      sections={[
        {
          percentage: 60,
          color: '#C64DF7',
        },
      ]}
      backgroundColor="#ddd"
    />
    <View style={styles.gauge}>
      <Text style={styles.title}>{title}</Text>
      <Text>60%</Text>
    </View>
  </View>
);
  
const Intimacy = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    return (
        <View style={styles.container}>
            <FlatList
              columnWrapperStyle={{justifyContent: 'space-between'}}
                numColumns= {2}
                data={DATA}
                style={styles.intimacyItem}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    alignSelf: 'stretch'
                }}
            />


        </View>    
    );
};
  
export default Intimacy;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:5,
  },
  item: {
    flex: 1/2,
    width: (width - 10) / 2,
    height: (width - 10) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingVertical:5,
    paddingHorizontal:10,
    backgroundColor:"#C64DF7",
    textAlign: 'center',
    fontWeight:"bold",
    fontSize:12,
    color:"#fff", 
    borderRadius:66   
  },
  intimacyItem:{
    padding:5
  } 
});