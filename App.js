/* 
4/22/2025

Set up some structural parts of the application. Navigation, some UI elements.

The screens folder on the project directory is where the other screens (like Actors and Directors for example) will go when created.

The img folder is where static images can be added.

-Neftali
*/


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Movies from './screens/Movies';

const Stack = createStackNavigator();

const headerText = "MOVIES DATABASE"

//Nav component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="The Movie App" component={Home} /> {/* Change the "name= "The Movie App"" to name = "Home" if it brings up errors */}
        <Stack.Screen name="Movies" component={Movies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home ({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('./img/movieBGImage.jpg')}>
        <View style={styles.padContent}>
          <Text style={styles.topHeaderText}>{headerText.split(' ').join('\n')}</Text> {/* The split and join code makes a new line for every word in the string */}
        </View>
      </ImageBackground>
  

      <View style={styles.content}>
        <View style={styles.topBox}>
          <TouchableOpacity style={styles.padContent} onPress={() => navigation.navigate('Movies')}>
            <Text style={{ fontSize: 20 }}>🎬 MOVIES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.padContent} onPress={() => navigation.navigate('Movies')}>
            <Text style={{ fontSize: 20 }}>🎬 ACTORS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.padContent} onPress={() => navigation.navigate('Movies')}>
            <Text style={{ fontSize: 20 }}>🎬 DIRECTORS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bgImage: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
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
