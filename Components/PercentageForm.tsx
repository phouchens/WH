import * as React from 'react'
import { FlatList } from 'react-native'
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
  { percent: 0 }, //for some reason the last two items dont show up in the Flatlist
  { percent: 0 } //THis is just a cheap work around
]

export const PercentageForm: React.FC<Props> = props => {
  const { amount } = props
  return (
    <FlatList
      key={amount}
      data={list}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{ paddingBottom: 20 }}
      renderItem={({ item }) => (
        <Row amount={amount} percentage={item.percent} />
      )}
    />
  )
}
