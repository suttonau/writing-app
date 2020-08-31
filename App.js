import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import client from './ApolloClient'
import { ApolloProvider } from '@apollo/client'

import Prompt from './components/Prompt'

export default function App () {
  return (
    <ApolloProvider client={client}>
      <StatusBar style='auto' />
      <Prompt />
    </ApolloProvider>
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
