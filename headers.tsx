import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Percentage</Text>
      <Text style={styles.text}>Amount</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 300,
    minHeight: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  text: {
    fontWeight: 'bold'
  }
})
