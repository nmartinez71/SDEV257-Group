import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TextInput } from "react-native";
import { getActors } from "../API/ActorAPI"; // Import your new API function

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

export default function Actors() {
  const [actors, setActors] = useState([]);
  const [filteredActors, setFilteredActors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchActors = async () => {
      const data = await getActors();
      setActors(data);
      setFilteredActors(data);
    };
    fetchActors();
  }, []);

  useEffect(() => {
    const filtered = actors.filter((actor) =>
      actor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredActors(filtered);
  }, [searchTerm]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search actor"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <ScrollView>
        {filteredActors.map((actor) => (
          <View key={actor.id} style={styles.actorCard}>
            <Image
              source={{ uri: IMAGE_BASE_URL + actor.profile_path }}
              style={styles.image}
            />
            <Text style={styles.name}>{actor.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  actorCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 8,
  },
  image: {
    width: 120,
    height: 119,
    borderRadius: 8,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
  },
});
