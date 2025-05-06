import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { getMovies } from '../API/MovieAPI';


export default function TestAPI() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetch = async () => {
        const results = await getMovies();
        setMovies(results);
      };
      fetch();
    }, []);

  return (
    <View>
        <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={{ width: 100, height: 150 }}
            />
            <Text>{item.title}</Text>
            </View>
        )}
    />
    </View>
  );
};
