import * as React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Row from './Row'

type Props = {
  amount: string
}

const list: { percent: number }[] = [
  { percent: 0.98 },
  { percent: 0.95 },
  { percent: 0.93 }
]
export const PercentageForm: React.FC<Props> = props => {
  const { amount } = props

  //   const list = (amount: string) => {
  //     return data.map(item => {
  //       return (
  //         <View>
  //           <Text>{item.percent * 100}%</Text>
  //           <Text>{item.percent * Number(amount)}</Text>
  //         </View>
  //       )
  //     })
  //   }

  //   return <View>{list(amount)}</View>
  return (
    <FlatList
      key={amount}
      data={list}
      renderItem={({ item }) => (
        <View>
          <Text>{item.percent * 100}%</Text>
          <Text>{item.percent * Number(amount)}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
})
