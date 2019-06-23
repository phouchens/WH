import * as React from 'react'
import { Switch, TextInput, Text } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'
import Utils from '../utils'
import { PercentageForm } from '../Components/PercentageForm'
import { Header } from '../Components/headers'

export default class WeightInput extends React.Component {
  state = {
    isLbs: true,
    amount: ''
  }

  convert = () => {
    this.setState({ isLbs: !this.state.isLbs })

    if (this.state.amount === '') return

    if (this.state.isLbs) {
      this.setState({ amount: Utils.convertToKilos(this.state.amount) })
    } else {
      this.setState({ amount: Utils.convertToPounds(this.state.amount) })
    }
  }

  onChanged = (amount: string): void => {
    this.setState({
      amount: amount
    })
  }

  render() {
    const { isLbs, amount } = this.state
    return (
      <View style={styles.masterContainer}>
        <Text style={styles.text}>
          {this.state.isLbs ? 'Weight in lbs' : 'Weight in kgs'}
        </Text>
        <Switch
          style={styles.switch}
          value={isLbs}
          onValueChange={this.convert}
        />
        <TextInput
          style={styles.input}
          placeholder="Please Enter Max Weight"
          mode="outlined"
          keyboardType="numeric"
          onChangeText={this.onChanged}
          value={amount}
          maxLength={6}
        />
        {amount ? <Header /> : null}
        <View>{amount ? <PercentageForm amount={amount} /> : null}</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: { alignItems: 'center', textAlign: 'center' },
  switch: { alignSelf: 'center' },
  masterContainer: { flex: 1 },
  input: { alignSelf: 'stretch', marginRight: 10, marginLeft: 10 }
})
