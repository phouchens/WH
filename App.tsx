import React from 'react'
import { StyleSheet } from 'react-native'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import { Appbar } from 'react-native-paper'
import { createAppContainer } from 'react-navigation'
import WeightInput from './pages/WeightInput'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import DropSetInput from './pages/DropSetInput'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const AppNavigator = createMaterialBottomTabNavigator({
  'Percentage Calculator': {
    screen: WeightInput,
    navigationOptions: {
      tabBarIcon: () => <Icon name="weight" size={30} color="#FFF" />
    }
  },
  'Drop Set Calculator': {
    screen: DropSetInput,
    navigationOptions: {
      tabBarIcon: () => <Icon name="trending-down" size={30} color="#FFF" />
    }
  }
})

const AppContainer = createAppContainer(AppNavigator)

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
        <AppContainer />
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
