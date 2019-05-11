import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Utils from './utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 2
  },
  textLeft: {
    marginLeft: 12,
    fontSize: 16
  },
  textRight: {
    marginLeft: 12,
    fontSize: 16
  },
  textCenter: {
    fontSize: 18
  }
})

const Row = (props: any) => (
  <View style={styles.container}>
    <Text style={styles.textLeft}>{`${Utils.displayPercentageAmountInKgs(
      props.amount
    )}`}</Text>
    <Text>{`${props.percentage}`}</Text>
    <Text style={styles.textRight}>{`${Utils.displayPercentageAmountInLbs(
      props.amount
    )}`}</Text>
  </View>
)

export default Row
