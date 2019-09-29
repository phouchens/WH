import * as React from 'react'
import { Text, Linking, View } from 'react-native'
import { Button } from 'react-native-paper'

export function TodaysWorkout() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Button
        onPress={() =>
          Linking.openURL(
            'https://docs.google.com/spreadsheets/d/1CiAuVC-2WzKPEi_vvZM5Ha7OIAqIIjibx9kA5ANON_Q/'
          )
        }
      >
        Go to workout
      </Button>
    </View>
  )
}
