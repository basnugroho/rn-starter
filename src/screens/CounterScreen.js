import React, { useReducer } from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'

const reducer = (state, action) => {
    // state === { count: 0 }
    // action === { type: 'increment' || 'decrement', payload: 1}
    
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload}
        case 'decrement':
            return { ...state, count: state.count - action.payload}
        default:
            return state
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return <View>
        <Button 
            title="Increase" 
            onPress = { () => dispatch({ type: 'increment', payload: 1 }) }
        />
        <Button 
            title="Decrease" 
            onPress = { () => dispatch({ type: 'decrement', payload: 1 }) }
        />
        <Text>Current count: {state.count}</Text>
    </View>
}

const style = StyleSheet.create({})

export default CounterScreen