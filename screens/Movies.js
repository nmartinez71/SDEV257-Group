import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";


export default function Movies() {
  const [ movies, setMovies ] = useState(["Placeholder 1", "Placeholder 2", "Placeholder 3", "Placeholder 4"]);

  return (
    <View>
      <ScrollView >

      {
        movies.map((item, index) => {
          return (
          <TouchableOpacity key={index} onPress={() => completeTask(index)}>
            {/* REPLACE image, title, and text with the actual image, title, and description pulled from the API */}
            <Item 
            key={index} 
            image={require('../img/movieBGImage.jpg')}
            title={"PLACEHOLDER TITLE"} 
            text={item} 
            />
            </TouchableOpacity>
            )
          })
          }

      {/* more items go here */}

      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

function Item (props) {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={props.image}/>
      <View style={{ width: 228 }} >
        <Text style={{ fontSize: 20 }}>{props.title}</Text>
        <Text style={{ fontSize: 15 }}>{props.text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: "lightgray",
    width: 385,
    height: 250,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    margin: 15,
  },
  bgImage: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  image: {
    width: 130,
    height: 230,
    margin: 10,
  },
  topHeaderText: {
    color: '#fff',
    fontSize: 40,
  },
  bottomHeaderText: {
    color: '#fff',
    fontSize: 46,
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
  },
  topBox: {
    alignItems: 'flex-start',
  },
  padContent: {
    padding: 10
  }
});
