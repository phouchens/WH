import * as React from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import Row from './Row'

type Props = {
  amount: string
}

const list: { percent: number }[] = [
  { percent: 1 },
  { percent: 0.98 },
  { percent: 0.95 },
  { percent: 0.93 },
  { percent: 0.9 },
  { percent: 0.85 },
  { percent: 0.8 },
  { percent: 0.75 },
  { percent: 0.7 },
  { percent: 0.65 },
  { percent: 0.6 }
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
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{(item.percent * 100).toFixed()}%</Text>
          <Text>{(item.percent * Number(amount)).toFixed()}</Text>
        </View>
      )}
    />
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
    // marginTop: 20
  }
})
