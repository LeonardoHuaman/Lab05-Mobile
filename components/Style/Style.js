import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    searchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#f1f1f1',
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    searchInput: {
      flex: 1,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginRight: 10,
      paddingHorizontal: 10,
      backgroundColor: 'white',
    },
    searchButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "black",
      color: 'white',
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    teamContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      color: 'white',
    },
    teamInfoLeft: {
      flex: 1,
      alignItems: 'flex-start',
      marginLeft: 10,
      color: 'white',
    },
    teamInfoRight: {
      flex: 1,
      alignItems: 'flex-end',
      marginRight: 10,
      color: 'white',
    },
    teamLogo: {
      width: 50,
      height: 50,
      margin: 5,
    },
    teamName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
    teamScore: {
      fontSize: 15,
      color: 'white',
    },
    vsContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
      color: 'white',
    },
    vsText: {
      fontSize: 30,
      marginBottom: 10,
      fontFamily: 'Helvetica',
      color: 'white',
    },
    duracion: {
      fontSize: 15,
      color: 'white',
    },
    playerListContainer: {
      marginTop: 20,
      alignItems: 'center',
      color: 'white',
    },    
    playerName: {
      fontSize: 16,
      marginVertical: 5,
      color: 'white',
    },
    playerListContainer: {
      flexDirection: 'row',
      marginTop: 20,
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      color: 'white',
    },
    playerListColumnRight: {
      flex: 1,
      alignItems: 'flex-end', 
      color: 'white',
    },
    playerListColumnLeft: {
      flex: 1,
      alignItems: 'flex-start',
      color: 'white',
    },
    resultado: {
      fontSize: 25,
      color: 'white',
    },
    winnerTextContainer: {
      alignItems: 'center',
      marginTop: 10,
      alignItems: 'flex-start',
      color: 'white',
    },
    winnerText: {
      fontSize: 17,
      color: 'white',
    },
    winnerTextLeague: {
      fontSize: 17,
      color: 'white',
    },
    imagenDota: {
      height: 300,
      marginTop: 10,
      borderWidth: 2,
      borderColor: 'white',
      backgroundColor : "black",
    },
  });

  export default styles;