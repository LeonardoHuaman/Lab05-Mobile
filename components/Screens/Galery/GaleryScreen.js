import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card, Title } from "react-native-paper";
import { SafeAreaView, StatusBar } from 'react-native';


function AllPlaces({ route }) {
  const newPlace = route.params ? route.params.place : null;

  const retrieveAllPlaces = async () => {
    try {
      const placesString = await AsyncStorage.getItem("places");
      const places = JSON.parse(placesString);
      return places || [];
    } catch (error) {
      console.error("Error al guardar en AsyncStorage:", error);
      return [];
    }
  }

  const showAllPlaces = async () => {
    const allPlaces = await retrieveAllPlaces();
    if (newPlace) {
      allPlaces.push(newPlace);
    }
    setPlaces(allPlaces);
  }

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    showAllPlaces();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style = {styles.title}> Actualiza la app para ver los cambios :D </Text>
        <View>
          <FlatList
            data={places}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Card style={styles.card}>
                <Card.Cover source={{ uri: item.image }} />
                <Card.Content>
                  <Title>{item.place}</Title>
                </Card.Content>
              </Card>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title:{
    marginBottom : 10,
    fontSize : 20
  },
  txt: {
    marginTop: 0,
    textAlign: "center",
  },
  
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },

  text: {
    fontSize: 42,
  },
  card: {
    marginBottom: 10,
  },
});

export default AllPlaces;
