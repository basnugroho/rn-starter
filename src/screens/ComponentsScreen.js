// import libraries
import React from 'react'
import { View } from 'react-native'
import { Text, StyleSheet } from 'react-native' 

// create component function that return some JSX

const ComponentScreen = () => {
    const myName = 'Baskoro';

    return (
    <View>
        <Text style={styles.textStyle}>Getting started with react native!</Text>
        <Text style={styles.subHeader}>My name is {myName}</Text>
    </View>
    )
}

// create stylesheet to style component
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeader: {
        fontSize: 20
    }
})

//export the component
export default ComponentScreen