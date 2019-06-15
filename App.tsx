import React from 'react'
import { StyleSheet } from 'react-native'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import { Appbar } from 'react-native-paper'
import WeightInput from './WeightInput'
export default class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <Appbar.Header>
          <Appbar.Content
            titleStyle={styles.headerTitleStyle}
            title="WEIGHTLIFTING HELPER"
          />
        </Appbar.Header>
        <WeightInput />
      </PaperProvider>
    )
  }
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2C001E',
    accent: '#E95420'
  }
}

const styles = StyleSheet.create({
  headerTitleStyle: {
    textAlign: 'center'
  }
})
