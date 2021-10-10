import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [{
  country: 'Country Namefdaf', // Which will display on bottom
  artists: [{
    name: 'artistOne_name'
  }]
}]



// FlatList in Sectionlist
const Alarm = () => {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View>
            <Text>{item.country}</Text>
            <FlatList
                data={DATA.artists}
                renderItem={({ item2 }) => (
                <View>
                    <Text>{item2.name}</Text>
                </View>
                )}
                keyExtractor={(item2, index) => index}
            />
          </View>
        )}
        keyExtractor={(item, index) => index}
      /> 
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Alarm;