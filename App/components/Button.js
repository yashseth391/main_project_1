import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors';
function Button({ title }) {
    return (
        <View style={styles.button}>
            <TouchableOpacity>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%'
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }

})
export default Button;