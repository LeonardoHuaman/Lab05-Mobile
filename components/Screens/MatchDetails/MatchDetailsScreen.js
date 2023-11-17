import React from 'react';
import { View, Text, Image, ActivityIndicator , ScrollView} from 'react-native';
import { useState, useEffect } from 'react';
import styles from '../../Style/Style';
const MatchDetailsScreen = ({ route }) => {
    const { matchId } = route.params;
    const [matchDetails, setMatchDetails] = useState(null);
    const [playerNames, setPlayerNames] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      obtenerMatchDetails(matchId);
    }, [matchId]);
  
    const obtenerMatchDetails = (matchId) => {
      fetch(`https://api.opendota.com/api/matches/${matchId}?api_key=bed2d0a0-3980-4883-bc41-c97e8c9a19a6`)
        .then((response) => response.json())
        .then((data) => {
          const duracionSegundos = data.duration;
          const minutos = Math.floor(duracionSegundos / 60);
          const segundos = duracionSegundos % 60;
          const duracionFormateada = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
          console.log(data.radiant_win);
          
          if (data.radiant_win) {
            const winnerName = data.radiant_team.name;
            const leagueName = data.league.name;
            setMatchDetails({
              radiantTeam: data.radiant_team.name,
              direTeam: data.dire_team.name,
              radiantScore: data.radiant_score,
              direScore: data.dire_score,
              duracion: duracionFormateada,
              winnerName: winnerName,
              leagueName: leagueName,
            });

          }else {
            const winnerName = data.dire_team.name;
            const leagueName = data.league.name;
            setMatchDetails({
              radiantTeam: data.radiant_team.name,
              direTeam: data.dire_team.name,
              radiantScore: data.radiant_score,
              direScore: data.dire_score,
              duracion: duracionFormateada,
              winnerName: winnerName,
              leagueName: leagueName,
            });
          }
          obtenerNombresJugadores(data.players);
        })
        .catch((error) => {
          console.error('Error al obtener detalles del partido: ', error);
          setLoading(false);
        });
    };
  
    const obtenerNombresJugadores = (players) => {
      const solicitudesJugadores = players.map((player) => {
        return fetch(`https://api.opendota.com/api/players/${player.account_id}?api_key=bed2d0a0-3980-4883-bc41-c97e8c9a19a6`)
          .then((response) => response.json())
          .then((data) => {
            const nombre = data.profile.name;
            const personaname = data.profile.personaname;
  
            return nombre !== null ? nombre : personaname;
          })
          .catch((error) => console.error('Error al obtener el nombre del jugador: ', error));
      });
  
      Promise.all(solicitudesJugadores)
        .then((nombres) => {
          setPlayerNames(nombres);
          setLoading(false);
        })
        .catch((error) => console.error('Error al obtener los nombres de los jugadores: ', error));
    };
  
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      );
    }

    let playerNamesLeft = playerNames.slice(0, 5);
    let playerNamesRight = playerNames.slice(5, 10);
  
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.teamContainer}>
            <View style={styles.teamInfoLeft}>
              <Image source={require('./Radiant_icon.webp')} style={styles.teamLogo} />
              <Text style={styles.teamName}>{matchDetails.radiantTeam} </Text>
              <Text style={styles.teamScore}>N°Kills: {matchDetails.radiantScore} </Text>
            </View>
    
            <View style={styles.vsContainer}>
              <Text style={styles.vsText}>VS</Text>
            </View>
    
            <View style={styles.teamInfoRight}>
              <Image source={require('./Dire_icon_2.webp')} style={styles.teamLogo} />
              <Text style={styles.teamName}>{matchDetails.direTeam} </Text>
              <Text style={styles.teamScore}>N°Kills: {matchDetails.direScore} </Text>
            </View>
          </View>
    
          <Text style={styles.duracion}>Duración: {matchDetails.duracion} </Text>
    
          <View style={styles.playerListContainer}>
            <View style={styles.playerListColumnLeft}>
              {playerNamesLeft.map((nombre, index) => (
                <Text key={index} style={styles.playerName}>
                  {nombre}
                </Text>
              ))}
            </View>
            <View style={styles.playerListColumnRight}>
              {playerNamesRight.map((nombre, index) => (
                <Text key={index} style={styles.playerName}>
                  {nombre}
                </Text>
              ))}
            </View>
          </View>
          <Text style = { styles.resultado }> Resultado </Text>
          <View style={styles.winnerTextContainer}>
            <Text style={styles.winnerText}>Winner:  {matchDetails.winnerName} </Text>
            <Text style={styles.winnerTextLeague}>League: {matchDetails.leagueName} </Text>
          </View>

          <View style={styles.imagenDotaContainer}>
            <Image source={require('./Mapa_Dota.png')} style={styles.imagenDota} />
          </View>
        </View>
      </ScrollView>
    );
  };

  export default MatchDetailsScreen;