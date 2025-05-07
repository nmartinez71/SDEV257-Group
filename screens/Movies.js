import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native';
import { getMovies } from '../API/MovieAPI';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const results = await getMovies();
      setMovies(results);
      setFilteredMovies(results);
    };
    fetch();
  }, []);

  useEffect(() => {
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchTerm]);

  return (
    <View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search movie"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      <ScrollView >

      {
        filteredMovies.map((movie, index) => {
          return (
            <TouchableOpacity key={movie.id} onPress={() => completeTask(index)}>
            {/* REPLACE image, title, and text with the actual image, title, and description pulled from the API */}
            <Item
              image={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
              title={movie.title}
              text={movie.overview}
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

function Item({ image, title, text }) {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={image} />
      <View style={{ width: 228 }}>
        <Text style={{ fontSize: 20 }}>{title}</Text>
        <Text style={{ fontSize: 15 }} numberOfLines={3}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    margin: 12,
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
