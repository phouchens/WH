import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
  amount: string
  percentage: number
}

const Row: React.SFC<Props> = props => {
  const { amount, percentage } = props
  return (
    <View style={styles.container}>
      <Text style={styles.textCenter}>{`${percentage * 100}%`}</Text>
      <Text style={styles.textRight}>
        {(props.percentage * Number(amount)).toFixed()}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    minWidth: 300,
    padding: 10,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 2
  },
  textRight: {
    marginLeft: 12,
    fontSize: 18
  },
  textCenter: {
    fontSize: 18
  }
})

export default Row
