import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import WeightInput from './WeightInput';
export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <Appbar.Header>
          <Appbar.Content title="WeightliftingHelper" />
        </Appbar.Header>
        <WeightInput />
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({});
