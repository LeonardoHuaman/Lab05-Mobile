import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from "../../Camera/ImagePicker";

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


const AddGalery = ({ navigation }) => {
    const [place, setPlace] = useState("");
    const [selectedImage, setSelectedImage] = useState();

    function imageHandler(imageUri) {
        setSelectedImage(imageUri);
    }

    async function savePlaceHandler() {
        const newPlace = {
            place: place,
            image: selectedImage,
        }

        try {
            const existingPlaces = await AsyncStorage.getItem('places');
            const parsedExistingPlaces = existingPlaces ? JSON.parse(existingPlaces) : [];

            parsedExistingPlaces.push(newPlace);

            await AsyncStorage.setItem('places', JSON.stringify(parsedExistingPlaces));

            navigation.navigate("GaleryScreen", {
                place: newPlace
            });
        } catch (error) {
            console.error("Error al guardar el lugar:", error);
        }
    }

        return (
            <View style={styles.view}>
                <TextInput
                    label="Describe Tu Imagen"
                    value={place}
                    mode="outlined"
                    onChangeText={place => setPlace(place)}
                />
                <ImagePicker onImageChange={imageHandler} />
                <Button
                    style={styles.btn}
                    color={Colors.primary700}
                    mode="contained"
                    onPress={savePlaceHandler}>
                    Añadir Imagen
                </Button>
            </View>
        );
    }

    const styles = StyleSheet.create({
        view: {
            marginTop: 16,
            marginHorizontal: 16,
            alignContent: "center",
        },
        btn: {
            marginTop: 32
        }
    })

export default AddGalery;
