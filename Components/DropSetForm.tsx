import * as React from 'react'
import { FlatList } from 'react-native'
import DropRow from './DropRow'

type Props = {
  amount: string
}

const list: { percent: number }[] = [
  { percent: 0.05 },
  { percent: 0.1 },
  { percent: 0.15 },
  { percent: 0.2 },
  { percent: 0.25 }
]

export const DropSetForm: React.FC<Props> = props => {
  const { amount } = props
  return (
    <FlatList
      key={amount}
      data={list}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{ paddingBottom: 20 }}
      renderItem={({ item }) => (
        <DropRow amount={amount} percentage={item.percent} />
      )}
    />
  )
}
