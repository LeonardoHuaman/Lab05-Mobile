import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/Home/HomeScreen';
import ListMatchesScreen from '../Screens/ListMatches/ListMatchesScreen';
import MatchDetailsScreen from '../Screens/MatchDetails/MatchDetailsScreen';
import GaleryScreen from '../Screens/Galery/GaleryScreen';
import AddGalery from '../Screens/Galery/AddGalery';
import { IconButton } from 'react-native-paper';

const Colors = {
  primary50: '#cfeffd',
  primary100: '#a0defb',
  primary200: '#77cff8',
  primary400: '#44bdf5',
  primary500: '#1aacf0',
  primary700: '#0570c9',
  primary800: '#003b88',
  accent500: '#e6b30b',
  gray700: '#221c30',
  white: '#fff'
};


const Stack = createStackNavigator();


const Routes = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ListaMatches" component={ListMatchesScreen} />
          <Stack.Screen name="MatchDetails" component={MatchDetailsScreen} />
          <Stack.Screen name="GaleryScreen" component={GaleryScreen} options={({ navigation }) => ({ title: 'Mis Imagenes', headerRight: () => (
          <IconButton icon="camera" size={24} iconColor={Colors.black} onPress={() => navigation.navigate('AddGalery')} />),})}/>
          <Stack.Screen name="AddGalery" component={AddGalery} options={{ title: 'Añade una foto a tu galeria',}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default Routes;