import React from 'react';
import { View, Image,SectionList, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    title: "오늘",
    data: ["Pizza", "Burger"],
  },
  {
    title: "어제",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "이번주",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "저번달",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

// FlatList in Sectionlist
const Alarm = () => {
  return(
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 18,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 15
  }
});

export default Alarm;