import * as React from 'react';
import { Switch } from 'react-native-paper';
import { StyleSheet, View, TextInput } from 'react-native';

export default class WeightInput extends React.Component {
  state = {
    isLbs: false,
    amount: ''
  };

  convert = () => {
    this.setState({ isLbs: !this.state.isLbs });

    if (this.state.amount === '') return;

    if (this.state.isLbs) {
      this.setState({ amount: this.convertToKilos(this.state.amount) });
    } else {
      this.setState({ amount: this.convertToPounds(this.state.amount) });
    }
  };

  convertToKilos(amount: string): string {
    const convertedNumber = Math.round(Number(amount) / 2.20462);
    return String(convertedNumber);
  }

  convertToPounds(amount: string): string {
    const convertedNumber = Math.round(Number(amount) * 2.20462);
    return String(convertedNumber);
  }

  onChanged = (amount: string): void => {
    this.setState({
      amount: amount
    });
  };

  render() {
    const { isLbs, amount } = this.state;
    return (
      <View>
        <Switch value={isLbs} onValueChange={this.convert} />
        <TextInput keyboardType="numeric" onChangeText={this.onChanged} value={amount} maxLength={6} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
});
