/* eslint-disable react/prop-types */
import React from 'react'
import { Share, View, Button } from 'react-native'

const ShareButton = ({ props, promptMessage }) => {
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: promptMessage
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <View style={{ marginTop: 20 }}>
      <Button onPress={handleShare} title='Share' />
    </View>
  )
}

export default ShareButton
