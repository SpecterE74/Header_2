import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
//lssldlslslsdksld
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const Header = () => {

    return (
        <View style={styles.container}>
            <Image
                source={require('./Images/Esraa2.jpg')}
                style={styles.image}>
            </Image>
            <Image
                source={require('./Images/lines.png')}
                style={styles.lineImage}>
            </Image>
            <Text style={styles.userText}>Hamza_Alamssi2474</Text>
            <View style={styles.line}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userText: {
        fontSize: 15,
        // alignSelf: 'flex-start',
        fontWeight: 'bold',
        top: SCREEN_HEIGHT * -0.09,
        right: SCREEN_WIDTH * -0.11,
        color: 'black'
    },
    image: {
        height: SCREEN_WIDTH * 0.1,
        width: SCREEN_WIDTH * 0.1,
        borderRadius: 20,
        top: SCREEN_HEIGHT * 0.01,
    },
    line: {
        width: SCREEN_WIDTH,
        height: 3,
        backgroundColor: 'gray',
        top: SCREEN_HEIGHT * -0.08,
    },
    lineImage: {
        width: SCREEN_WIDTH * 0.07,
        height: SCREEN_HEIGHT * 0.07,
        top: SCREEN_HEIGHT * -0.05,
        left: SCREEN_WIDTH * 0.92,
        opacity: 0.5,
    },
});

export default Header;