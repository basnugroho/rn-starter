import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import TextScreen from './TextScreen'

const BoxLayoutScreen = () => {
    return (
    <View style = { styles.container }>
        <View style = { styles.titleBox }>
            <Text style = { styles.titleText }>App</Text>
        </View>
        <View style = { styles.box }>
            <Text style = { styles.textOneStyle } />
            <Text style = { styles.textTwoStyle } />
            <Text style = { styles.textThreeStyle } />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        flexDirection: 'column'
    },
    titleBox: {
        borderWidth: 2,
        height: 80,
        alignItems: 'center'
    },
    titleText: {
        margin: 20,
        fontSize: 20
    },
    box: {
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-between'
    },
    textOneStyle: {
        borderColor: 'black',
        backgroundColor: 'red',
        width: 100
    },
    textTwoStyle: {
        borderColor: 'black',
        backgroundColor: 'green',
        top: 80,
        width: 100
    },
    textThreeStyle: {
        borderColor: 'black',
        backgroundColor: 'purple',
        width: 100
    }
})

export default BoxLayoutScreen