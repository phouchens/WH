import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import WeightInput from './WeightInput';
export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <Appbar.Header>
          <Appbar.Content titleStyle={styles.headerTitleStyle} title="WeightliftingHelper" />
        </Appbar.Header>
        <WeightInput />
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  headerTitleStyle: { 
    textAlign:"center"}  
});
