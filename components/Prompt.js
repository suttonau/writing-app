import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useQuery, gql } from '@apollo/client'
import RoundedButton from './RoundedButton'
import ShareButton from './ShareButton'

// graphQL query
const PROMPT_QUERY = gql`
  query {
    prompt {
      title
      id
    }
}
`
export default function Prompt () {
  const [color, setColor] = useState('black')

  const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
  }
  /**
   * useQuery Hook
   * loading: updates loading state
   * data: updates data
   * refetch: calls refetch to refetch that data as many times as we want
   */
  const { loading, data, refetch } = useQuery(PROMPT_QUERY)

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      {!loading && data && data.prompt && (
        <Text style={{ color: 'white', textAlign: 'center', marginBottom: 10 }}>{data.prompt.title}</Text>
      )}

      <RoundedButton
        backgroundColor='teal'
        text='Next'
        textColor='white'
        onPress={() => {
          setColor(randomRgb())
          refetch()
        }}
      />

      {!loading && data && data.prompt && (
        <ShareButton
          promptMessage={data.prompt.title}
        />
      )}
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
