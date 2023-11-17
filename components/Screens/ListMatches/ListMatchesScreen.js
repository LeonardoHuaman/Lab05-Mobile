import React from 'react';
import { View, Text, TouchableOpacity, FlatList , TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from '../../Style/Style';


const ListMatchesScreen = () => {
    const [matches, setMatches] = useState([]);
    const navigation = useNavigation(); 

    const [searchText, setSearchText] = useState('');
  
    useEffect(() => {
      axios
        .get('https://api.opendota.com/api/proMatches?api_key=bed2d0a0-3980-4883-bc41-c97e8c9a19a6')
        .then((response) => {
          setMatches(response.data);
        })
        .catch((error) => {
          console.error('Error al cargar los datos de las partidas', error);
        });
    }, []);
  
    const renderItem = ({ item }) => (
      <View style={{ borderBottomWidth: 1, borderColor: '#ccc', padding: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Match ID: {item.match_id}</Text>
        <Text>Radiant Team: {item.radiant_name}</Text>
        <Text>Dire Team: {item.dire_name}</Text>
      </View>
    );

    const handleSearch = () => {
      navigation.navigate('MatchDetails', { matchId: searchText });
    };
  
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Inserte un Match ID"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleSearch}
        >
        <Text style={{ color: 'white' }}>Search</Text>
        </TouchableOpacity>
        </View>
        <Text>   ListaMatches</Text>
        <FlatList
            data={matches}
            keyExtractor={(item) => item.match_id.toString()}
            renderItem={renderItem}
        />
      </View>
    );
  };

  export default ListMatchesScreen