import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import RoundedButton from './components/RoundedButton'

export default function App () {
  const [color, setColor] = useState('black')

  const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
  }

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text>Open up App.js to start working on your app!</Text>
      <RoundedButton
        backgroundColor='teal'
        text='Next'
        textColor='white'
        onPress={() => setColor(randomRgb())}
      />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  }
})
