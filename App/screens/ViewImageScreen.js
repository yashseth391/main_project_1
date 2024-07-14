import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>

            <Image
                resizeMode='contain'
                source={require('../assets/chair.jpg')}
                style={styles.image}
            />
        </View>
    )
}

export default ViewImageScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        left: 30,
        top: 40
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30
    }
})